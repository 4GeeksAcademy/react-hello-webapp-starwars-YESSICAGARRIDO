import React, { useState, useEffect } from "react";
import CardPeople from "../components/CardPeople";




export default function People() {

    const [personajes, setPersonajes] =useState([]);
    console.log(personajes)

   useEffect(() => {

    fetch("https://www.swapi.tech/api/people")
        .then(res => res.json())
        .then(function(responseAPI){
            setPersonajes(responseAPI.results)
        })
        .catch(err => console.error(err));
}, [])

    return (
        <div className="body-people">
           

            {personajes.map(personas => (
                 <CardPeople img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${personas.uid}.jpg`} name={personas.name} uid={personas.uid} />
            ))}

        
        </div>
        

    )
}