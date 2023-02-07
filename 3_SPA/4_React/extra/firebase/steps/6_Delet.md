# Deleting Firestore Data

[Trash icon](https://fonts.google.com/icons?icon.query=trash)

Let's keep it simple and remove it from RecipeList.jsx component

first import icon:

```jsx
// icon
import trashIcon from "../assets/delet.svg";
```

```jsx
    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>

          <img
            src={trashIcon}
            className="delete"
            onClick={() => handleDelete(recipe.id)}
            alt="trashcan to remove the card"
          />

</div>
```

let's create the delete function:

```jsx
 const handleDelete = (id) => {
    recipeStore.collection("recipes").doc(id).delete();
  };
```

we done

sum styles:

```css
.delete {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  filter: invert(60%)
}
```

so you noticed when we delete we have to refresh the page so next topic REAL TIME DB BABYYYYYYYYY