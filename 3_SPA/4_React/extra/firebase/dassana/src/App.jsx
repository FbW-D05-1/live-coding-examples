import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import "./App.css";
import OnlineUsers from "./components/OnlineUsers";
//Welcome to my broken comments on this Project
function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {/**if the user is not logged in will not see the Side Navbar */}
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              {/**A check if the user is logged in and in the data base , if the user is not logged in will be redirected to the signup page */}
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />

              <Route
                path="/projects/:id"
                element={user ? <Project /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

// dashboard homepage

// login

// sign up

// create new project

// project details
