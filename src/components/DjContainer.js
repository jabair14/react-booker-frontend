import DjCard from "./DjCard";
import { useHistory } from "react-router-dom"


function DjContainer({ djs }) {

    const history = useHistory()

    return (
        <div className="container-lg col-lg">
            DJ Container
            {/* <div className="djcards "> */}
                        <DjCard djs={djs} />
            {/* </div> */}
        </div>

    )
}


export default DjContainer