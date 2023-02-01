import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect,
} from "react-router-dom";
import { About, Contact, Home, Article } from "./pages/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">
            <h1>My Articles</h1>
          </Link>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
