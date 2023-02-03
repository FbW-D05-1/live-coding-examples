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
  console.log(mode);
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={mode === "dark" ? iconSun : iconMoon}
          onClick={toggleMode}
          alt="dark mode toggler icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
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
