import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import PeopleHome from "../components/PeopleHome.jsx";
import PlanetsHome from "../components/PlanetsHome.jsx";
import VehiclesHome from "../components/VehiclesHome.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  
	return (
		<div className="">
			<PeopleHome/>
			<PlanetsHome/>
			<VehiclesHome/>
		</div>
	);
}; 