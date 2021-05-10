import DjCard from "./DjCard";

function DjContainer({ djs }) {

   
    return (
        <div className="container">
            DJ Container
            <div className="djcards">
                <DjCard djs={djs}/>
            </div>
        </div>

    )
}


export default DjContainer