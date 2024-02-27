import logo from './logo.svg';
import './App.css';
import Checkout from './components/Checkout'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Accordion from './components/Accordion'

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
