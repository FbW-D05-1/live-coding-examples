import "./App.css";

function App() {
  const user = "Ali";
  const handleClick = () => {};
  const users = [{ name: "Ali" }, { name: "Micha" }, { name: "Ahmad" }];
  const loggedIn = true;
  return (
    <div className="App">
      {loggedIn ? (
        <header className="App-header">
          <p>and save to reload</p>
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/** */}
        </header>
      ) : (
        <h1>Please Log in</h1>
      )}
    </div>
  );
}

export default App;
