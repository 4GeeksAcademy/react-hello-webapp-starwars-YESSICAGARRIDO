import React from "react";
import Planets from "./Planets";
import CardPlanets from "../components/CardPlanets";
import CardDetallesPlanets from "../components/CardDetallesPlanets";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detallesplanets() {

    const [descriplanets, setDescriplanets] = useState(null)
    console.log(descriplanets);

    const { uid } = useParams()

    useEffect(function () {

        fetch(`https://www.swapi.tech/api/planets/${uid}`)
            .then(res => res.json())
            .then(function (responseAPI) {
                setDescriplanets(responseAPI.result.properties)
            })
            .catch(err => console.error(err));

    }, [uid]);

    return (


        <div className="card-descriplanets-container">
            {descriplanets && (
                <CardDetallesPlanets
                    img={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${uid}.jpg`}
                    name={descriplanets.name}
                    diameter={descriplanets.diameter}
                    rotation_period={descriplanets.rotation_period}
                    orbital_period={descriplanets.orbital_period}
                    gravity={descriplanets.gravity}
                    population={descriplanets.population}
                    climate={descriplanets.climate}
                    terrain={descriplanets.terrain}

                />
            )}
        </div>
    );

}

