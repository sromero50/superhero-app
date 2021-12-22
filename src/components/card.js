import React from 'react'

const Card = (props) => {
    return (
        <div className="col-md mx-3 my-2" >
            <div class="card bg-dark text-light col-md" style={{ minWidth: "20rem" }}>
                <div className="row" >
                    <h4 className="card-title col-md-6 mt-2 p-1">{props.name}</h4>
                   {props.alignment === "good" 
                    ? (<h5 className="col-md-2 ms-5 mt-2 bg-success p-1 border rounded border-success">Hero</h5>) 
                    : (<h5 className="col-md-3 ms-5 mt-2 bg-danger p-1 border rounded border-danger">Villain</h5>)}
                </div>
                <img class="card-img-top" src={props.image} alt="Card image cap" style={{ maxHeight: "20rem" }} />
                <button href="#" class="btn btn-dark w-100 search">Add to your team</button>
            </div>
        </div>

    )
}

export default Card
