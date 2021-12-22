import axios from 'axios';
import React, {useState} from 'react'
import Card from '../components/card';

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
        <div className="container text-center">
            <h1 className="mt-3 display-5" >Find your hero or villain</h1>
        <form onSubmit={handleSearch} >
            <div className="form-group col-md-4 m-auto mt-3">
                <input
                    name="character"
                    className="form-control text-center search"
                    type="text"
                    placeholder="Look for a character"
                    value={character}
                    onChange={handleChange}
                />
                <button className="btn btn-dark w-100 search">Search</button>
            </div>
        </form>
        {results && 
        
        <div className="row row-cols-4 row-cols-ms-5 results m-auto mt-4" >
          { results.map(item => {
               return  (<Card key={item.id} name={item.name} image={item.image.url} alignment={item.biography.alignment}  />)
                  
           })}
           </div>
         
        }
       
        
        </div>
    )
}

export default Search
