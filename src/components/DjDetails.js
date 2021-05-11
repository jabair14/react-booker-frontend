import { useState } from 'react';

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
                <p class="card-text">
                    {bio}
                </p>
                <ul class="list-group list-group-flush" style={{ display: details ? "" : "none" }}>
                    <li class="list-group-item">Genre: {genre}</li>
                    <li class="list-group-item">Rate: ${rate}/hour</li>
                    <li class="list-group-item">{link}</li>
                    <li class="list-group-item"><iframe src="https://open.spotify.com/embed/artist/6wMr4zKPrrR0UVz08WtUWc" width="250" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"/></li>
                </ul>
                <button onClick={toggleDetails} class="btn btn-primary">{details ? "Less" : "More"} Info...</button>
            </div>
        </>
    )
}


export default DjDetails