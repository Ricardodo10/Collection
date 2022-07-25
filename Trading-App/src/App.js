import './App.css';
import React from "react";

import { Outlet, Link } from "react-router-dom";


import Home from "./Home";


function App() {
  return (
    <div>
      <>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        
      <h1>
      <Link to="/">Home</Link>
      </h1>

      <a>
      <Link to="/pricelist">Price list</Link>
      </a>




      <Home/>
      
      <button>
      <Link to="/login">Login</Link>
      </button>

      <button>
      <Link to="/register">SignUp</Link>
      </button>
      </nav>

      <Outlet />
      </>
    </div>
  );
}

export default App;
