function DjDetails({ id, name, bio, image = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png", genre, rate, link }) {


    return (
        <>
            <img src={image} class="card-img-top" alt={name} />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">
                    {bio}
                </p>
                <a href="#" class="btn btn-primary">More Info...</a>
            </div>
        </>
    )
}


export default DjDetails