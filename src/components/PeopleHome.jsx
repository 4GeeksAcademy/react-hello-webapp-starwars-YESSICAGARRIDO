import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import People from "../pages/People";
import "bootstrap-icons/font/bootstrap-icons.css";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export default function PeopleHome() {
    const { store, dispatch } = useGlobalReducer()

    return (
        
        <div className="people-home-container">
            <h2 className="text-white p-2 ms-4 w-25 text-center">People</h2>
            <Link to={"/people"} className="btn btn-warning ms-4 w-25  rounded-pill rounded-5 text-center"><span><i className="bi bi-caret-right-fill"></i>Read More</span></Link>
        </div>
    )
}