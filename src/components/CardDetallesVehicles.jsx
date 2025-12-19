import React from "react";
import { Link } from "react-router-dom";

export default function CardDetallesVehicles({ img, name, uid, model, vehicle_class, manufacturer, cost_in_credits, crew, passengers, max_atmosphering_speed, cargo_capacity, consumables}) 

{
    return (

        <div className="card-descripcion btn btn-light  text-dark  ms-4 w-25 text-center" >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p> model:{model}, vehicle_class:{vehicle_class}, manufacturer:{manufacturer}, cost_in_credits:{cost_in_credits}, crew:{crew}, passengers:{passengers}, max_atmosphering_speed:{max_atmosphering_speed}, cargo_capacity:{cargo_capacity}, consumables:{consumables}</p>
                
            </div>
            <div className="card-body">
                <Link to="/vehicles" className="card-link">Go back</Link>
            </div>
        </div>


    )
}

