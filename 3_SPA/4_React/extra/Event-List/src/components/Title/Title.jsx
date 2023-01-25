import "./Title.module.css";
export default function Title({ subtitle, title }) {
  // console.log(title, subtitle);
  return (
    <div>
      <h1 className="title">{title}</h1>
      <br />
      <h2 className="subtitle">{subtitle}</h2>
      <br />
    </div>
  );
}
