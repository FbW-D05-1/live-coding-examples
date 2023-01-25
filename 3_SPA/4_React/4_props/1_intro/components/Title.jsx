import "./styles/Title.css";
//next step we will accept the prop here
// when we pass a prop into a component, that component automatically recieves a prop object as a prameter in the functioin

export default function Title(props) {
  // this prop object will contain any props passed into the function in our case there is going to be a title prop on this object
  return (
    <div>
      {/* now we can access the said prop by just typing it in curly braces anywhere
      in our code */}
      <h1 className="title">{props.title}</h1>
      {/* property name here matches whatever you call the prop you pass it in */}
      <br />
      <h2 className="subtitle">{props.subtitle}</h2>
      <br />
    </div>
  );
}
