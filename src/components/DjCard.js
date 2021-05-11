import DjDetails from "./DjDetails";

function DjCard({ djs }) {

    console.log(djs)



     const djCardInfo = djs.map(dj => <DjDetails key={dj.id} {...dj} />)
     

    return (
        <div class="card text-white bg-secondary mb-3" style={{ width: "18rem;" }}>
            {djCardInfo}
        </div>
    )
}


export default DjCard