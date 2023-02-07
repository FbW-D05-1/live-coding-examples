import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  // we get context again but since we have only one result we don't need to destructue
  const context = useContext(ThemeContext);

  // Now the context is going to be undefined if we're trying to use our context outside the scope of it.
  // imagine instead of wrapping App component, we wrapped the theme provider just around one or two components
  if (context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvdider");
  }

  return context;
};
