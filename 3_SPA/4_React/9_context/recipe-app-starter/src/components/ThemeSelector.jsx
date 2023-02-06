import { useTheme } from "../hooks/useTheme";
import iconSun from "../assets/sun.svg";
import iconMoon from "../assets/moon.svg";
//styles
import "./ThemeSelector.css";

export default function ThemeSelector() {
  const themeColors = ["#BFACAA", "#9792E3", "#BBA0B2"];
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        <div className="mode-toggle">
          <img
            onClick={toggleMode}
            src={mode === "dark" ? iconSun : iconMoon}
            style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
            alt="dark mode toggler icon"
          />
        </div>
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
