import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/types/FunctionalComponent';
import NavBar from './components/NavBar';


const persona = {
  nombre: 'John',
  apellido: 'Doe',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <NavBar/>
          <FunctionalComponent {...persona} />
        </div>
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
