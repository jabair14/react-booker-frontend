import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';



function DjPage() {

  const [djs, setDjs] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);

  const params = useParams()

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/djs/${params.id}`)
      .then((r) => r.json())
      .then((dj) => {
        setDjs(dj);
        setIsLoaded(true)
      });
  }, [params.id]);

  if (!isLoaded) return <h2>Loading...</h2>

  const { name, image, link, bio, genre, rate } = djs
  console.log(name)

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style={{ width: "100%" }}>
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
            </ul>
          </div>
        </div>
      </nav>
      <h1> {name} </h1>
      <img src={image} alt={name} />
      <p className="card-text">
        {bio}
      </p>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">Genre: {genre}</li>
        <li className="list-group-item">Rate: ${rate}/hour</li>
        <li className="list-group-item">{link}</li>
        <li className="list-group-item"><iframe src="https://open.spotify.com/embed/artist/6wMr4zKPrrR0UVz08WtUWc" width="250" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" /></li>
        <li className="list-group-item">
          <button type="button" className="btn btn-primary btn-lg">Book Now!</button>
        </li>
      </ul>
    </>
  )
}

export default DjPage;