import { useState } from 'react';
import { Link } from 'react-router-dom';

function DjDetails({ id, name, bio, image = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png", genre, rate, link }) {
    const [details, setDetails] = useState(false)

    function toggleDetails() {
        setDetails(details => !details)
    }

    return (
        <>
            <img src={image} class="card-img-top" alt={name} />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
               
                {/* <button onClick={toggleDetails} class="btn btn-primary">{details ? "Less" : "More"} Info...</button> */}
                <Link to={`/djs/${id}`}>More Info</Link>
            </div>
        </>
    )
}


export default DjDetails