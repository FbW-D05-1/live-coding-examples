import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostEditPage from "./pages/PostEditPage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import SavedPage from "./pages/SavedPage";

function App() {
  return (
    <Router>
      <Header component={Header} />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/postlist" component={PostListPage} />
          <Route path="/post/:id/edit" component={PostEditPage} />
          <Route path="/posts/:id" component={PostPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/saved/:id?" component={SavedPage} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
