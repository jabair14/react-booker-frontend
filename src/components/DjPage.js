import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { useState } from 'react';


function DjPage () {

    const [djs, setDjs] = useState(null)
    const params = useParams()
    // console.log(params);
  // const id = 1;

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/djs/${params.id}`)
      .then((r) => r.json())
      .then((dj) => {
        setDjs(dj);
        // setIsLoaded(true);
        // console.log(dj)
      });
  }, [params.id]);

  // const {name, image, link, bio, genre, rate} = djs
  console.log(djs.name)

    return (
      <>
        <h1> {djs.name} </h1>
        <p class="card-text">
          {djs.bio}
        </p>
      
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Genre: {djs.genre}</li>
        <li class="list-group-item">Rate: ${djs.rate}/hour</li>
        <li class="list-group-item">{djs.link}</li>
        <li class="list-group-item"><iframe src="https://open.spotify.com/embed/artist/6wMr4zKPrrR0UVz08WtUWc" width="250" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"/></li>
    </ul> 
    </>
    )
}

export default DjPage;