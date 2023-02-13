So we want to filter our projects let's create a new component inside dashboard folder i'll name it ProjectFilter.jsx

then inside we need an array:

```js
const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];
```


mapping all the filters in a button:

```jsx
 <div className="project-filter">
      <nav>
      <p>Filter by: </p>
        {filterList.map((filter) => (
          <button key={filter}>{filter}</button>
        ))}
      </nav>
    </div>
```

on click event

```jsx
 <button
            className={currentFilter === filter ? "active" : ""}
            key={filter}
            onClick={() => handleClick(filter)}
          >
            {filter}
          </button>
```

then we need a new state

```jsx
const [currentFilter, setCurrentFilter] = useState("all");
```

for now for testing this handleClick:

```jsx
 const handleClick = (newFilter) => {
    setCurrentFilter(newFilter);
    console.log(newFilter);
  };
```

add new component inside our dashboard.jsx and we want it above our ProjectList component

```jsx

 {documents && <ProjectFilter />}
```

styling

```css
.project-filter {
  margin: 30px auto;
}
.project-filter nav {
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
}
.project-filter p {
  font-size: 0.9em;
  margin-right: 10px;
}
.project-filter button {
  background: transparent;
  border: 0;
  font-family: inherit;
  font-weight: bold;
  color: var(--text-color);
  cursor: pointer;
  border-right: 1px solid #e4e4e4;
  font-size: 0.9em;
}
.project-filter button:last-child {
  border: 0;
}
.project-filter button.active {
  color: var(--primary-color);
} 
```

## Changning things up

let's cut our state for currentFilter and pass it as a prop so first add the state in Dashboard.jsx then pass prop:

```jsx
  const [currentFilter, setCurrentFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };
```

```jsx
 <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
```

## Filter function

first import useAuthContext and invoke it:

```jsx
import { useAuthContext } from "../../hooks/useAuthContext";

// rest of the code


const { user } = useAuthContext();
```
filter
```jsx
  const projects = documents?.filter((document) => {
    switch (currentFilter) {
      case "all":
        return true;
      case "mine":
        let assignedToMe = false;
        document.assignedUsersList.forEach((u) => {
          if (user.uid === u.id) {
            assignedToMe = true;
          }
        });
        return assignedToMe;
      case "development":
      case "design":
      case "sales":
      case "marketing":
        console.log(document.category, currentFilter);
        return document.category === currentFilter;

      default:
        return true;
    }
  });
```
passing filtered projects as prop
```jsx

 {projects && <ProjectList projects={projects} />}

```

cool now you have a personal project managment tool gratz