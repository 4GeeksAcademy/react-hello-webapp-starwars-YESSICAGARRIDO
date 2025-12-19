import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetallesVehicles from "../components/CardDetallesVehicles";



export default function Detallesvehicles() {

    const [descripvehicles, setDescripvehicles] = useState(null)


    const { uid } = useParams()

    useEffect(function () {

        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
            .then(res => res.json())
            .then(function (responseAPI) {
                setDescripvehicles(responseAPI.result.properties)
            })
            .catch(err => console.error(err));

    }, [uid]);

    return (


        <div className="card-descripcion-container">
            {descripvehicles && (
                <CardDetallesVehicles
                    img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/${uid}.jpg`}
                    name={descripvehicles.name}
                    model={descripvehicles.model}
                    vehicle_class={descripvehicles.vehicle_class}
                    manufacturer={descripvehicles.manufacturer}
                    cost_in_credits={descripvehicles.cost_in_credits} 
                    crew={descripvehicles.crew}
                    passengers={descripvehicles.passengers}
                    max_atmosphering_speed={descripvehicles.passengers}
                    cargo_capacity={descripvehicles.cargo_capacity}
                    consumables={descripvehicles.cargo_capacity}
                   
                />
            )}
        </div>
    );

}