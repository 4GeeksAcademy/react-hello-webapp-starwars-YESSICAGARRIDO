import { useEffect, useState } from "react";
import CardVehicles from "../components/CardVehicles";

export default function Vehicles() {

    const [veihiculos, setVehiculos]= useState([])

    useEffect(() => {
        fetch("https://www.swapi.tech/api/vehicles")
            .then(res => res.json())
            .then(function (responseAPI) {
                setVehiculos(responseAPI.results)
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div className="body-vehicles">
            {veihiculos.map(coche => (
                <CardVehicles 
                img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/${coche.uid}.jpg`}
                name={coche.name}
                uid={coche.uid}
                
                />
                
            ))}
        </div>

    )
}