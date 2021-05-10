import DjCard from "./DjCard";

function DjContainer() {
    return (
        <div className="container">
            DJ Container
            <div className="col-md-4">
                <DjCard />
                <DjCard />
                <DjCard />
                <DjCard />
                <DjCard />
            </div>
        </div>

    )
}


export default DjContainer