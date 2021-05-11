import SearchBar from "./SearchBar";
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function NavBar({ setSearchTerm }) {
  // const [dropdown, setDropdown ] = useState(false)

  // function toggleDropdown() {
  //   setDropdown(dropdown => !dropdown)
  // }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink class="nav-link active" aria-current="page" to="/djs">DJs</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/profilepage">My Profile</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/bookingform">Bookings</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/">Login</NavLink>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort By
          </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Genre</a></li>
                <li><a class="dropdown-item" href="#">Price ↑ Ascending</a></li>
                <li><a class="dropdown-item" href="#">Price ↓ Descneding</a></li>
              </ul>
            </li>
          </ul>
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </nav>
  )
}


export default NavBar