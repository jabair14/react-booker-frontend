import './App.css';
import DjContainer from './components/DjContainer';
import NavBar from './components/NavBar';
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom"
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import DjPage from './components/DjPage';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [djs, setDjs] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [bookings, setBookings] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const history = useHistory()

  
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

  const handleLoginClient = (e) => {
    e.preventDefault()
    
    const usernameInput = e.target.username.value
    const passwordInput = e.target.password.value
    
    

    fetch('http://127.0.0.1:3000/clients')
    .then(res => res.json())
    .then(clients => {
      
        clients.filter(client => {
          
          if(client.username === usernameInput && client.password === passwordInput){
                setCurrentUser(client.id)
                history.push(`/clients/${client.id}`)
              } else {
                return "Username and/or Password does not match!"
              }
              
        })
        
      })
    }
    console.log(currentUser)

    return (
      <div className="App">
      <header className="App-header">
        

        <Switch>
          <Route exact path="/">
          <img src="https://crackmagazine.net/wp-content/uploads/2021/03/191116_PRINTWORKS_BuggedOut_JakeDavis_@hungryvisuals-3677-scaled.jpg" class="img-fluid" alt="dj-controls" style={{ width: "95%", height: 350 }} />
            <LandingPage handleLoginClient={handleLoginClient}/>
          </Route>
          <Route exact path="/djs">
            <NavBar setSearchTerm={setSearchTerm} />
            <DjContainer djs={filteredDjs} />
          </Route>
          {/* <Route exact path="/profilepage">
          <NavBar setSearchTerm={setSearchTerm} />
            <ProfilePage />
          </Route> */}
          <Route exact path="/djs/:id">
            <DjPage onAddBooking={handleAddBooking} />
          </Route>
          <Route exact path="/clients/:id">
          <NavBar  />
            <ProfilePage currentUser={currentUser}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
