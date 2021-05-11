import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Header, Image, Modal, Checkbox, Form } from 'semantic-ui-react';



function DjPage({onAddBooking}) {

  const [djs, setDjs] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('')
  const [hours_booked, setHours] = useState (1)
  const [location, setLocation] = useState ('')
  const [event_name, setEventName] = useState ('')
  const [client_id, setClientId] = useState(17)
  const [dj_id, setDjId] = useState('')
  const history = useHistory()
  
  // console.log(params.id)
  
  
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
  
  const { name, image, link, bio, genre, rate, id } = djs
  // console.log(name)

  // console.log(id)

  const handleBookingSubmit = (e) => {
    e.preventDefault()

    const formData = {
      date,
      hours_booked,
      location,
      event_name,
      client_id,
      dj_id: id,
    };   

    fetch('http://127.0.0.1:3000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(booking => {
      onAddBooking(booking)
      history.push(`/djs/${id}`)
    })

    console.log("submitted", formData)
  } 


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
        <li className="list-group-item"><iframe src="https://open.spotify.com/embed/artist/6wMr4zKPrrR0UVz08WtUWc" width="250" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"> </iframe></li>
        <li className="list-group-item">
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Book Now</Button>}
          >
            <Modal.Header>Book {name}</Modal.Header>
            <Modal.Content image>
              <Image size='medium' src={image} wrapped />
              <Modal.Description>
                <Form onSubmit={handleBookingSubmit}>
                <Form.Field>
                <input type="hidden" id="client_id" name="client_id" value={client_id}/>
                </Form.Field>
                <Form.Field>
                    <label>Event Name</label>
                    <input type="text"
                    id="event_name"
                    name="event_name"
                    value={event_name}
                    onChange={(e)=> setEventName(e.target.value)}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Date</label>
                    <input type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e)=> setDate(e.target.value)}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Hours Booked</label>
                    <input type="number"
                    id="hours"
                    name="hours"
                    value={hours_booked}
                    onChange={(e)=> setHours(e.target.value)}
                    min="1" max="5"/>
                  </Form.Field>
                  <Form.Field>
                    <label>Location</label>
                    <select id="location" name="location" 
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e)=> setLocation(e.target.value)}
                    >
                      <option value=''>Select City</option>
                      <option value="new york">New York</option> 
                      <option value="los angeles">Los Angeles</option> 
                      <option value="philadelphia">Philadelphia</option> 
                      <option value="miami">Miami</option> 
                      </select>
                  </Form.Field>
                  <Form.Field>
                    <label>Price: ${rate}/hour</label>
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={() => setOpen(false)}>
                Cancel
        </Button>
              {/* <Button
                content="Yep, that's me"
                labelPosition='right'
                icon='checkmark'
                onClick={() => setOpen(false)}
                positive
              /> */}
            </Modal.Actions>
          </Modal>
        </li>
      </ul>
    </>
  )
}

export default DjPage;