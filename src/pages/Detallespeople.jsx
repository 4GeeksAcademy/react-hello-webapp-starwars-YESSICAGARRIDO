import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetalles from "../components/CardDetalles";


export default function Detallespeople() {

    const [descripcion, setDescripcion] = useState(null)
    console.log(descripcion);

    const { uid } = useParams()

    useEffect(function () {

        fetch(`https://www.swapi.tech/api/people/${uid}`)
            .then(res => res.json())
            .then(function (responseAPI) {
                setDescripcion(responseAPI.result.properties)
            })
            .catch(err => console.error(err));

    }, [uid]);

    return (
        

        <div className="card-descripcion-container">
            {descripcion && (
                <CardDetalles
                    img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${uid}.jpg`}
                    name={descripcion.name}
                    birth_year={descripcion.birth_year}
                    eye_color={descripcion.eye_color}
                    hair_color={descripcion.hair_color}
                    height={descripcion.height}
                    skin_color={descripcion.skin_color}
                />
            )}
        </div>
    );
    
}