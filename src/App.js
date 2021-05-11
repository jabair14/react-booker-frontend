import './App.css';
import DjContainer from './components/DjContainer';
import NavBar from './components/NavBar';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom"
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import DjPage from './components/DjPage';

function App() {

  const [djs, setDjs] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/djs')
      .then(res => res.json())
      .then(djArr => setDjs(djArr))
  }, [])

  const filteredDjs = djs.filter(dj => {
    return dj.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleAddBooking = (newBooking) => {
    const newBookingArr = [newBooking, ...bookings];
    setBookings(newBookingArr);
  }

  return (
    <div className="App">
      <header className="App-header">
        

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
          <Route exact path="/djs/:id">
            {/* <NavBar setSearchTerm={setSearchTerm} /> */}
            <DjPage onAddBooking={handleAddBooking}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
