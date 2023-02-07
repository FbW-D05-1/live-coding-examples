# Löschen von Firestore-Daten

[Papierkorb-Symbol](https://fonts.google.com/icons?icon.query=trash)

Halten wir es einfach und entfernen es aus der Komponente RecipeList.jsx

importiert zunächst das Icon:

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

lasst uns die Löschfunktion erstellen:
```jsx
 const handleDelete = (id) => {
    recipeStore.collection("recipes").doc(id).delete();
  };
```

Fertig.

Ein bisschen CSS für den Style:

```css
.delete {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  filter: invert(60%)
}
```

Ihr habt also bemerkt, dass wir beim Löschen die Seite aktualisieren müssen, so dass das nächste Thema REAL TIME DB BABYYYYYYYYY ist.
