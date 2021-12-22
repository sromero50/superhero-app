import axios from 'axios';
import React, {useState} from 'react'

const Search = () => {

    const [character, setCharacter] = useState("")
    const [results, setResults] = useState([])
    

    async function searchCharacter() {
        axios.get("https://superheroapi.com/api/1588776494801084/search/"+character)
        .then(
            response => {
                if(response.data.response === "error"){
                    console.log(response.data.error, "error")
                }else{
                    setResults(response.data.results)}
                }
                
        )
        .catch(error => console.log(error.response, "error") )
            
    }

    const handleChange = event => {
		const value = event.target.value;
		setCharacter( value );
	};

    async function handleSearch(e) {
        e.preventDefault();
        await searchCharacter(character)
    }

    return (
        <div className='container text-center'>
        <form onSubmit={handleSearch} >
            <div className='control'>
                <input
                    name="character"
                    className='input'
                    type='text'
                    placeholder='Find a hero'
                    value={character}
                    onChange={handleChange}
                />
            </div>
            <div className='control'>
                <button className='button is-link'>Search</button>
            </div>
        </form>
        {results && 
           results.map(item => {
               return <h1 key={item.id}>{item.name}</h1>
           })
        }
       
        
        </div>
    )
}

export default Search
