## Comments form

again since it will be only used inside project we can create component there ProjectComments.jsx


first imports:

```jsx
import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
```

```jsx
<div className="project-comments">
      <h4>Project Comments</h4>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
```

handleSubmit:

```jsx
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      dislayName: user.dislayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    console.log(commentToAdd);
  };
```


styling

```css
/* project comments */
.project-comments label {
  margin-bottom: 0px;
}
.project-comments textarea {
  min-height: 40px;
  font-size: 1.5em;
}
```

then import it to Project.jsx


```jsx
 <div className="project-details">
      <ProjectSummary project={document} />
      <ProjectComments />
    </div>
```

## updating firestore documents

we will update useFirestore.js

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
    case "UPDATED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
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

  // update a document
  /** update a document async request*/
  const updateDocument = async (id, updates) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const updatedDocument = await ref.doc(id).update(updates);
      dispatchIfNotCancelled({
        type: "UPDATED_DOCUMENT",
        payload: updatedDocument,
      });
      return updatedDocument;
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
      return null;
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, updateDocument, response };
};

```


## adding comments

lets use updateDocuments in our ProjectComments.jsx

first import useFireStore

```jsx
import { useFirestore } from "../../hooks/useFirestore";
export default function ProjectComments() {
  const { updateDocument, response } = useFirestore("projects");
```

now we need project id so let's pass it as a prop

```jsx
<ProjectComments project={document} />
```

then update handleSubmit:

```jsx
await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });

if (!response.error) {
      setNewComment("");
    }
```

now check firebase if the comment was added

## Output the comments

```jsx
<div className="project-comments">
      <h4>Project Comments</h4>
      <ul>
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <Avatar src={comment.photoURL} />
                <p>{comment.dislayName}</p>
              </div>
              <div className="comment-date">
                <p>date here</p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
```

we will add date a bit later since we want to have a format of how long ago it was posted

css:

```css
/* comment list */
.project-comments h4 {
  color: var(--heading-color);
}
.project-comments li {
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #f2f2f2;
  margin-top: 20px;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.05);
  background: #fff;
}
.comment-author {
  display: flex;
  align-items: center;
  color: var(--title-color);
}
.comment-author .avatar {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.comment-date {
  color: var(--text-color);
  font-size: 0.9em;
  margin: 4px 0 10px;
}
.comment-content {
  color: var(--text-color);
  font-size: 0.9em;
}
```

## Date of comments

we will use a package named date-fns

after install import it into projectComments.jsx

```jsx
import formatDistanceToNow from "date-fns/formatDistanceToNow";
```

now let's give it to our date div

```jsx
<div className="comment-date">
                <p>
                  {formatDistanceToNow(comment.createdAt.toDate(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
```

addSuffix means it will just add "ago" 