import "./styles/Title.css";
// for best practice it's better to destructure each prop you pass down
export default function BestPractice({ title, subtitle }) {
  return (
    <div>
      <h1 className="title">{title}</h1>

      <br />
      <h2 className="subtitle">{subtitle}</h2>
      <br />
    </div>
  );
}
