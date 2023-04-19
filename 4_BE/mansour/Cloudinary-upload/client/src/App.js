
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Upload from './components/Upload';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'; 
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import AuthState from './context/auth/AuthState';



function App() {
   const [authenticated , setAuthenticated] = useState(false)
  return (
     
        
    
<AuthState>
<BrowserRouter>
<Header />
        <Routes>
       
          <Route
            path="/"
            element={
              <Home
               
              />
            }
          />
         
          <Route
            path="/login"
            element={
              <Login setAuthenticated={setAuthenticated} authenticated={authenticated} />
            }
          />
           <Route
            path="/dashboard"
            element={
              <Dashboard
               
              />
            }
          />
           <Route
            path="/upload"
            element={
              <Upload
               
              />
            }
          />
        </Routes>
      </BrowserRouter>
      </AuthState>
     

   
  );
}

export default App;
