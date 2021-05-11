import './App.css';
import DjContainer from './components/DjContainer';
import NavBar from './components/NavBar';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom"
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import BookingForm from './components/BookingForm';

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
        <img src="https://crackmagazine.net/wp-content/uploads/2021/03/191116_PRINTWORKS_BuggedOut_JakeDavis_@hungryvisuals-3677-scaled.jpg" class="img-fluid" alt="dj-controls" style={{ width: "100%", height: 350 }} />

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/djs">
          <NavBar setSearchTerm={setSearchTerm} />
            <DjContainer djs={filteredDjs} />
          </Route>
          <Route exact path="/profilepage">
          <NavBar setSearchTerm={setSearchTerm} />
            <ProfilePage />
          </Route>
          <Route exact path="/bookingform">
          <NavBar setSearchTerm={setSearchTerm} />
            <BookingForm />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
