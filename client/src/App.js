<<<<<<< HEAD
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NavbarAndHome from "./components/Combined";
import "react-toastify/dist/ReactToastify.css";
=======
import logo from './logo.svg';
import './App.css';
import Checkout from './components/Checkout'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Accordion from './components/Accordion'
>>>>>>> 29e3f2b283d38eea58c44e3ff9efe08fc91a280a

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<NavbarAndHome/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
=======
      <Navbar/>
      <Hero/>
      <Accordion/>
      <Home />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 29e3f2b283d38eea58c44e3ff9efe08fc91a280a
    </div>
  );
}

export default App;
