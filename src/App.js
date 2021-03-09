import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";



function App() {
  return (

    <Router>
    <div className="container">
        <p>Will begin to add stuff!  -Sungho & Vlad</p>    
    </div>

{/* NAVBAR */}
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/about">About</Link>
        </li>
        <li>
         <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    {/* REACT NAV  */}
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
  </Switch>

    </Router>
  );
}

export default App;
