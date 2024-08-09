import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Temporary link for real project
        </p>
        <a
          className="App-link"
          href="http://localhost:5173/"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://localhost:5173/
        </a>
      </header>
    </div>
  );
}

export default App;
