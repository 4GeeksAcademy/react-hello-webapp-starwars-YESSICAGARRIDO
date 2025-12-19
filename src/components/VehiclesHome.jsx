import React from "react";
import { Link } from "react-router-dom";


export default function VehiclesHome() {
    return (
        <div className="vehicles-home-container">
            <h2 className="text-white p-2 ms-4 w-25 text-center">Vehicles</h2>
            <Link to={"/vehicles"} className="btn btn-warning ms-4 w-25  rounded-pill rounded-5 text-center"><span><i className="bi bi-caret-right-fill"></i>Read More</span></Link>
        </div>
    )
}