import { FaLocationArrow } from "react-icons/fa";
import "./Header.scss";

function Header({ setOrigin, setDestination, setMapCenter, Autocomplete }) {
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const origin = formData.get("origin");
		const destination = formData.get("destination");
		// e.currentTarget.reset();
		if (origin === "" || destination === "") {
			return;
		}
		setOrigin(origin);
		setDestination(destination);
	};

	const handleClick = () => {
		setMapCenter((previous) => !previous);
	};

	return (
		<header className="maps__header">
			<form onSubmit={handleFormSubmit} className="maps__header-content">
				<div className="maps__input-wrapper">
					<Autocomplete>
						<input className="maps__input" name="origin" type="text" placeholder="Origin" />
					</Autocomplete>
					<Autocomplete>
						<input
							className="maps__input"
							name="destination"
							type="text"
							placeholder="Destination"
						/>
					</Autocomplete>
				</div>
				<div className="maps__btn-wrapper">
					<button className="maps__btn" type="submit">
						Get Routes
					</button>
					<button className="maps__icon" onClick={handleClick}>
						{<FaLocationArrow />}
					</button>
				</div>
			</form>
		</header>
	);
}

export default Header;
