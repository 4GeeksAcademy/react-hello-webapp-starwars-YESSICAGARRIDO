import React from "react";
import { Link } from "react-router-dom";

export default function CardPeople({ name, img, uid }) {
    return (

        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"></p>
                <p className="card-text"></p>
                <div className=" d-flex justify-content-between align-items-center">
                    <Link to={`/people/${uid}`} ><button className="btn btn-warning"><span><i className="bi bi-caret-right-fill"></i>Read More</span></button></Link>
                    <button><i className="bi bi-heart"></i></button>
                </div>
            </div>
        </div>

    )
}