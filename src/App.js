import './App.css';
import DjContainer from './components/DjContainer';
import NavBar from './components/NavBar';
import { useState, useEffect } from "react";
import Login from './components/Login';
import { Switch, Route } from "react-router-dom"

function App() {

  const [djs, setDjs] = useState([])
  const [searchTerm, setSearchTerm] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:3000/djs')
    .then(res => res.json())
    .then(djArr => setDjs(djArr))
  }, [])

  const filteredDjs = djs.filter(dj => {
    return dj.name.includes(searchTerm)
  })

  return (
    <div className="App">
      <header className="App-header">
          <img src="https://crackmagazine.net/wp-content/uploads/2021/03/191116_PRINTWORKS_BuggedOut_JakeDavis_@hungryvisuals-3677-scaled.jpg" class="img-fluid" alt="dj-controls" style={{width: "100%", height: 200}} />
        
        <NavBar setSearchTerm={setSearchTerm} />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <DjContainer djs={filteredDjs}  />
            </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
