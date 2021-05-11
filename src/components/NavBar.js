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
    <>
    <img src="https://crackmagazine.net/wp-content/uploads/2021/03/191116_PRINTWORKS_BuggedOut_JakeDavis_@hungryvisuals-3677-scaled.jpg" class="img-fluid" alt="dj-controls" style={{ width: "100%", height: 350 }} />
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style={{width: "100%"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/djs">DJs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profilepage">My Profile</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/">Login</NavLink>
            </li> */}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort By
          </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Genre</a></li>
                <li><a className="dropdown-item" href="#">Price ↑ Ascending</a></li>
                <li><a className="dropdown-item" href="#">Price ↓ Descneding</a></li>
              </ul>
            </li>
          </ul>
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </nav>
    </>
  )
}


export default NavBar