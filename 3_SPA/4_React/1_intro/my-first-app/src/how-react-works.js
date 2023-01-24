import React from "react";

export default function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <button type="submit">I like donuts</button>
    </div>
  );
}

React.createElement("div", { class: "App" }, [
  React.createElement("p", null, "Hello World!"),
  React.createElement("button", { type: "submit" }, "I like donuts"),
]);
