# Fetching Users


In order to provide our users with real-time information about who is currently online, we will create a new component called OnlineUsers.jsx. This component will display a list of all users who have signed up, indicating their online or offline status.

```jsx
import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";
// styles
import "./OnlineUsers.css";

export default function OnlineUsers() {
  const { error, documents } = useCollection("users");
  return (
    <div className="user-list">
      <h2>All Users:</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}

```


```css
.user-list {
  width: 250px;
  min-width: 250px;
  padding: 30px;
  box-sizing: border-box;
  background: #fbfbfb;
  color: var(--heading-color);
}
.user-list h2 {
  text-align: right;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  font-size: 1.2em;
}
.user-list .user-list-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px auto;
}
.user-list .avatar {
  margin-left: 10px;
  width: 40px;
  height: 40px;
}
```

The following code in App.jsx:

```jsx
     </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
```

## Online Status 

Returning to the OnlineUsers.jsx component, let's focus on accurately representing the online status of each user. This way, our users can quickly and easily see who is available for communication or collaboration in real-time.

```jsx
  <div ket={user.id} className="user-list-item">
            {user.online && <span className="users online-users" />}
            {!user.online && <span className="users offline-users" />}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
```

```css
/* online offline users */
.user-list-item .users {
    display: inline-block;
    margin-right: 10px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-top: 2px;
}

.user-list-item .users.online-users {
    background-color: #0ebb50;
}

.user-list-item .users.offline-users {
    background-color: #bb1f0e;
}
```
