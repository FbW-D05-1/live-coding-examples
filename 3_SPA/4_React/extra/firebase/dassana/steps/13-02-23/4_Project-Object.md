# Creating a project object

so in our current create project form we give out too many infos we don't need so let's change that a bit

```js
import { useAuthContext } from "../../hooks/useAuthContext";
import { timestamp } from "../../firebase/config";


// where all states are stored
 const {user} = useAuthContext();
```

```js
 const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a project category");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("Please assign users to the project");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList,
    };
    console.log(project);
  };
```

## Saving the project to firestore

we will use new useFirestore hook

```js
import { useReducer, useEffect, useState } from "react";
import { projectFirestore, timestamp } from "../firebase/config";
/** initial states for firestore*/
let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};
/** firestore reducers */
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "DELETED_DOCUMENT":
      return { isPending: false, document: null, success: true, error: null };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
/** firestore control hook*/
export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const ref = projectFirestore.collection(collection);

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add a document
  /** add document async request*/
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt });
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // delete a document
  /** delete a document async request*/
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      await ref.doc(id).delete();
      dispatchIfNotCancelled({ type: "DELETED_DOCUMENT" });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: "could not delete" });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};

```


then back to create.jsx

```jsx
import { useFirestore } from "../../hooks/useFirestore";

// inside of function component
 const {addDocument, response} = useFirestore("projects");
```


```jsx
// give handle submit async function
const handleSubmit = async (e) => {
    // rest of the code


// instead of console.log(project)
 await addDocument(project);

 // redirect if everything goes well
 if (!response.error) {
      navigate("/")
    }
```

## Fetching Projects

So now we can fetch our projects in Dashboard.jsx:

```jsx
import { useCollection } from "../../hooks/useCollection";

// rest of the code
const {documents, error} = useCollection('projects');

```

then let's just list some names:

```jsx
return (
    <div>
      <h2 className="page=title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && documents.map((doc) => <p key={doc.id}>{doc.name}</p>)}
    </div>
  );
```
okay it works let's create a new component ProjectList.jsx(with css) so it's more reusable in the future.

first let's give it a prop in Dashboard:

```jsx
{documents && <ProjectList projects={documents} />}
```

then destructure in ProjectList

```jsx
import "./ProjectList.css";

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.length === 0 && <p>No Projects yet</p>}
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}
```

## making a grid


first let's change things up for now
don't forget to import necessary things
```jsx
<div className="project-list">
      {projects.length === 0 && <p>No Projects yet</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.id}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
```

works but looks terrible so css time:

```css
.project-list {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
}
.project-list a {
  background-color: #fff;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: inherit;
}
.project-list h4 {
  font-size: 0.9em;
  color: var(--heading-color);
}
.project-list p {
  color: var(--text-color);
  font-size: 0.9em;
}
.project-list .assigned-to {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #eee;
}
.project-list ul {
  margin: 10px 0;
  display: flex;
}
.project-list li {
  margin-right: 10px;
}
.project-list .avatar {
  width: 30px;
  height: 30px;
}
```

nice cards yugi

next we make individual project page