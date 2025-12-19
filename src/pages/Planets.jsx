import { useEffect, useState } from "react"
import CardPlanets from "../components/CardPlanets"



export default function Planets() {

    const [planetas, setPlanetas]= useState([])
    console.log(planetas)

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets")
            .then(res => res.json())
            .then(function (responseAPI) {
                setPlanetas(responseAPI.results)
            })
            .catch(err => console.error(err));

    }, [])


    return (
        <div className="body-planets">

        
            {planetas.map(planeta => (
                
                <CardPlanets img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${planeta.uid}.jpg`}  key={planeta.uid} name={planeta.name} uid={planeta.uid} />
            ))}
           
        </div>

    )
}