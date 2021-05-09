import './App.css';
import DjContainer from './components/DjContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src="../public/djcontrols.jpeg" alt="dj-controls"/>
        </div>
        <NavBar />
        <DjContainer  />
      </header>
    </div>
  );
}

export default App;
