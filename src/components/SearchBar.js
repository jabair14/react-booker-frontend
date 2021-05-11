import {useState} from 'react';

function SearchBar({ setSearchTerm }) {
    const [search, setSearch] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitted");
        setSearchTerm(search)
    }
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand"/>
                <form class="d-flex" onSubmit={handleSubmit} >
                    <input 
                    class="form-control me-2" 
                    type="text" 
                    placeholder="Search" 
                    aria-label="Search" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}


export default SearchBar