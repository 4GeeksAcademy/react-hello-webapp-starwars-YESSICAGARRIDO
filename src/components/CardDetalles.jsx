import React from "react";
import { Link } from "react-router-dom";

export default function CardDetalles({ img, name, birth_year, uid, eye_color, hair_color, height, skin_color }) {
    return (

        <div className="card-descripcion btn btn-light  text-dark  ms-4 w-25 text-center" >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Birth year:{birth_year} Eye color:{eye_color} Hair color:{hair_color} Height:{height} Skin_color:{skin_color}  </p>
                
            </div>
            <div className="card-body">
                <Link to="/people" className="card-link">Go back</Link>
            </div>
        </div>


    )
}