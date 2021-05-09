import DjDetails from "./DjDetails";

function DjCard() {
    return (
        <div class="card" style={{ width: "18rem;" }}>
            {/* <img src="..." class="card-img-top" alt="..."/> */}
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <DjDetails />
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}


export default DjCard