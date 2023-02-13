## Completed / Deleted Button

so we want the project creator mark as completed/ delete the project let's head to ProjectSummary.jsx and add a button.
```jsx
<button className="btn" onClick={handleClick}>
          Mark as Complete
        </button>
```

we can use our useFirestore hook to delete the project so import it

```jsx
const { deleteDocument } = useFirestore("projects");
```

handleClick

```jsx
 const handleClick = (e) => {
    deleteDocument(project.id);
  };
```

now to show the button only to the current user we need to import useAuthContext

then take out the user:
```jsx
const {user} = useAuthContext();
```

button check:

```jsx
{user.uid === project.createdBy.id && (
          <button className="btn" onClick={handleClick}>
            Mark as Complete
          </button>
        )}
```


some touchup let's add who created the project after page-title make a p

```jsx
<div className="made-by">
          <p>By: {project.createdBy.displayName}</p>{" "}
          <Avatar src={project.createdBy.photoURL} />
        </div>
```

```css
.made-by p {
    display: inline-block;
}

.made-by .avatar {
    height: 25px;
    width: 25px;
}
```


after delete there is error let's redirect

import useNavigate or useHistory invoke it and pass it on handleClick

```jsx
const handleClick = (e) => {
    deleteDocument(project.id);
    navigate("/");
  };
```