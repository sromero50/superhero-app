import axios from 'axios';
import React, { useState } from 'react'
import Card from '../components/card';
import Loading from '../components/loading';
const Search = () => {

    const [character, setCharacter] = useState("")
    const [results, setResults] = useState(false)
    const [loading, setLoading] = useState(true)

    async function searchCharacter() {
        setLoading(false)
        axios.get("https://superheroapi.com/api/1588776494801084/search/" + character)
            .then(
                response => {
                    if (response.data.response === "error") {
                        console.log(response.data.error, "error")
                        setLoading(true)
                    } else {
                        setResults(response.data.results)
                    }
                    setLoading(true)
                }

            )
    }

    const handleChange = event => {
        const value = event.target.value;
        setCharacter(value);
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
            <Loading active={loading} >
                {results &&
                    <div className="row results m-auto mt-4" >
                        {results.map(item => {
                            return (
                                <Card key={item.id} 
                                powerstats={item.powerstats} 
                                work={item.work} connections={item.connections} 
                                appearance={item.appearance} 
                                id={item.id} name={item.name} 
                                image={item.image.url} 
                                biography={item.biography} />
                            )

                        })}
                    </div>}
            </Loading>





        </div>
    )
}

export default Search
