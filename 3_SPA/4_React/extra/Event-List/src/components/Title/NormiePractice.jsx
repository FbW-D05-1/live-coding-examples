import "./Title.css";
export default function Title(prop) {
  console.log(prop);
  return (
    <div>
      <h1>{prop.title}</h1>
      <br />
      <h2>{prop.subtitle}</h2>
      <br />
    </div>
  );
}
