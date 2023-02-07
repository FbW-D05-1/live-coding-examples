import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { recipeStore } from "../firebase/config";

// styles
import "./RecipeList.css";
// icon
import trashIcon from "../assets/delet.svg";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  const handleDelete = (id) => {
    recipeStore.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            src={trashIcon}
            className="delete"
            onClick={() => handleDelete(recipe.id)}
            alt="trashcan to remove the card"
          />
        </div>
      ))}
    </div>
  );
}
