import React, { useState } from 'react'
import Swal from 'sweetalert2'
const Card = (props) => {


    const { name, image, biography, powerstats, id, appearance, work, connections } = props
    const [character, setCharacter] = useState({ name: name, image: image, biography: biography, powerstats: powerstats, id: id, appearance: appearance, work: work, connections: connections })


    function checkCharacter(currentTeam) {
        let hero = 0;
        let bad = 0;
        let onTeam = false;
        if (currentTeam.length < 6) {
          currentTeam.map(item => {
            item.biography.alignment === 'good' ? hero++ : bad++;
            if (item.id === character.id) {
              onTeam = true;
            }
          });
    
          if (!onTeam) {
            if (character.biography.alignment === 'good' && hero > 2) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You can only have 3 heroes on your team!',
                  })
              return false;
            } else if (character.biography.alignment === 'bad' && bad > 2) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You can only have 3 villains on your team!',
                  })
              return false;
            }
            return true;
          }
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  character.name+' is already on the team!',
          })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You can only have 6 characters on your team!',
              })
        }
      }

    const addCharacter = () => {
        const currentTeam = localStorage.getItem('myTeam')
      ? JSON.parse(localStorage.getItem('myTeam'))
      : [];
    console.log(currentTeam);
    if (checkCharacter(currentTeam)) {
      currentTeam.push(character);
      localStorage.setItem('myTeam', JSON.stringify(currentTeam));
    }
    }
        



    return (
        <div className="col-md mx-3 my-2" >
            <div className="card bg-dark text-light col-md" style={{ minWidth: "20rem" }}>
                <div className="row" >
                    <h4 className="card-title col-md-6 mt-2 p-1">{name}</h4>
                    {biography.alignment === "good"
                        ? (<h5 className="col-md-2 ms-5 mt-2 bg-success p-1 border rounded border-success">Hero</h5>)
                        : (<h5 className="col-md-3 ms-5 mt-2 bg-danger p-1 border rounded border-danger">Villain</h5>)}
                </div>
                <img class="card-img-top" src={image} alt="Card image cap" style={{ maxHeight: "20rem" }} />
                <button onClick={addCharacter} class="btn btn-dark w-100 search">Add to your team</button>
            </div>
        </div>

    )
}

export default Card
