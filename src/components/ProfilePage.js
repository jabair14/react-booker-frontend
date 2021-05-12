import { useState, useEffect } from 'react' 

function ProfilePage({ currentUser }) {

    const [user, setUser] = useState([])



    useEffect(() => {
        
        fetch(`http://127.0.0.1:3000/clients/${currentUser}`)
        .then(resp => resp.json())
        .then(user => {
            setUser(user)
        })
    }, [])
    
    console.log(user)

    return (
        <div>
            <h1> {user.name} </h1>

        </div>
    )
}

export default ProfilePage;