adding new projects 

first head to Create.jsx:

```jsx
import { useState } from "react";

//styles
import "./Create.css";

export default function Create() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDate);
  };
  return (
    <div className="create-form">
      <h2 className="page-title">Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project Details:</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        <label>
          <span>Set due date:</span>
          <input
            type="date"
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Project Category:</span>
          {/* category select later */}
        </label>
        <label>
          <span>Assigned to:</span>
          {/* assignee select later */}
        </label>
        <button className="btn">Add new Project</button>
      </form>
    </div>
  );
}


```

```css
.create-form {
    max-width: 600px;
}
```

## using select

first install 

```bash
npm i react-select
```

import:
```jsx
import Select from "react-select"
```

new array with categories

```js
const categories = [
    {value: 'development', label: 'Development'},
    {value: 'design', label: 'Design'},
    {value: 'sales', label: 'Sales'},
    {value: 'marketing', label: 'Marketing'},
  ]
```

now change category option:

```jsx
<label>
          <span>Project Category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
```

```js
console.log(name, details, dueDate, category.value);
```

## Assign users

import useCollection 

```jsx
import {useCollection} from "../../hooks/useCollection"
```

```jsx
 const { documents } = useCollection("users");
  console.log(documents);
```

we need value and label so first useState:

```jsx
 const [users, setUsers] = useState([]);
```

we will map inside useEffect hook so if user collection changes it gets triggered to update:

```jsx

 useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

```

```jsx
<label>
          <span>Assigned to:</span>
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>
```

```js
 console.log(name, details, dueDate, category.value, assignedUsers);
```


## Error Forms

required doesn't work on ```<Select />```

so first let's create error state

```jsx
  const [formError, setFormError] = useState(null);
```

then in handlesubmit:

```jsx
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
    console.log(name, details, dueDate, category.value, assignedUsers);
  };
```


now show errror:

```jsx
   <button className="btn">Add new Project</button>
        {formError && <div className="error">{formError}</div>}
      </form>
    </div>
```