import React from "react";
import { Link } from "react-router-dom";
import Planets from "../pages/Planets";

export default function PlanetsHome() {
    return (
        <div className="planets-home-container">
            <h2 className="text-white p-2 ms-4 w-25 text-center">Planets</h2>
            <Link to={"/planets"} className="btn btn-warning ms-4 w-25  rounded-pill rounded-5 text-center"><span><i className="bi bi-caret-right-fill"></i>Read More</span></Link>
        </div>
    )
}