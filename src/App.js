import './App.css';
import DjContainer from './components/DjContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src="https://www.pioneerdj.com/-/media/pioneerdj/images/news/2017/ddj-sr2/ddj-sr2-news-header.jpg?mw=1024&hash=2DDF12194CAFF9DF37DFD41B89D4BDD2" class="img-fluid" alt="dj-controls" style={{width: "80%"}} />
        <NavBar />
        <DjContainer  />
      </header>
    </div>
  );
}

export default App;
