import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kyeongmin Kim
        </p>
        <a
          href="https://www.google.com/search?q=lionel+messi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lionel Messi
        </a>
      </header>
    </div>
  );
}

export default App;
