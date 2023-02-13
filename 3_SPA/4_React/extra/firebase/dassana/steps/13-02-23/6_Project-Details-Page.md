now we can use our hook to fetch a single doc


head to Project.jsx page component

we need to extract the id with useParams so import it

extract id

```jsx
const { id } = useParams();
```

next we need the new hook so import it

then use it:

```jsx
const { error, document } = useDocument("projects", id);
```

let's do something new and display errors differently inside the function and not return:

```js
if (error) {
    return <div className="error">{error}</div>;
  }
```

now new way to do loadings:

```js
 if(!document){
    return <div className="loading">Loading....</div>
  }
```

NOTE: this will only work with real time db, since otherwise our component won't be reevaluated

first let's see if everything works:

```jsx
 return (
    <div className="project-details">
      <h1>{document.name}</h1>
    </div>
  );
```

## Project details

so on the left we want to show project summary and on the right we want to show comments

let's start with left side create ProjectSummary.jsx component and this time let's create it inside project folder since we will only use it there. We don't need css we can use Project.css for this


pass document as a prop:

```jsx
 <div className="project-details">
      <ProjectSummary project={document} />
    </div>
```

inside projectSummary:

```jsx
import Avatar from "../../components/Avatar";
export default function ProjectSummary({ project }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
          Project Due By: {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

styling

```css
.project-details {
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: start;
  grid-gap: 60px;
}

/* project summary */
.project-summary {
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
}
.project-summary .due-date {
  margin: 10px 0;
  font-size: 0.9em;
  color: var(--title-color);
}
.project-summary .details {
  margin: 30px 0;
  color: var(--text-color);
  line-height: 1.8em;
  font-size: 0.9em;
}
.project-summary h4 {
  color: var(--text-color);
  font-size: 0.9em;
}
.project-summary .assigned-users {
  display: flex;
  margin-top: 20px;
}
.project-summary .assigned-users .avatar {
  margin-right: 10px;
}
.project-summary + .btn {
  margin-top: 20px;
}
```