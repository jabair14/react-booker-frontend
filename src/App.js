import './App.css';
import DjContainer from './components/DjContainer';
import NavBar from './components/NavBar';
import { useState, useEffect } from "react";

function App() {

  const [djs, setDjs] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:3000/djs')
    .then(res => res.json())
    .then(djArr => setDjs(djArr))
  }, [])



  return (
    <div className="App">
      <header className="App-header">
          <img src="https://www.pioneerdj.com/-/media/pioneerdj/images/news/2017/ddj-sr2/ddj-sr2-news-header.jpg?mw=1024&hash=2DDF12194CAFF9DF37DFD41B89D4BDD2" class="img-fluid" alt="dj-controls" style={{width: "80%"}} />
        <NavBar />
        <DjContainer djs={djs}  />
      </header>
    </div>
  );
}

export default App;
