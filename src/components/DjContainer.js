import DjCard from "./DjCard";
import { useHistory } from "react-router-dom"


function DjContainer({ djs }) {

    const history = useHistory()
   
    return (
        <div className="container col row-cols-md-3">
            DJ Container
            <div className="djcards ">
                <DjCard djs={djs}/>
            </div>
        </div>

    )
}


export default DjContainer