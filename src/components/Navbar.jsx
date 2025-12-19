import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light p-10">
			<div className="container position-relative">
				<Link to="/"
					className="position-absolute top-50 start-50 translate-middle">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="navbar-logo rounded-4" alt="" />
				</Link>
				<div className="ml-auto">
					<div className="input-group mb-3">
						<button className="btn btn-outline-dark" type="button" id="button-addon1"><i className="bi bi-search"></i></button>
						<input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
					</div>

				</div>
				<div>
					<button type="button" className="btn btn-dark">Favoritos</button>
				</div>

			</div>
		</nav>
	);
};