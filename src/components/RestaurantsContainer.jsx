import { Restaurant } from "./Restaurant";
import { data } from "../data/data";

function RestaurantsContainer() {
	return (
		<div className="RestaurantsContainer">
			{data.restaurants.map((a) => (
				<Restaurant restaurant={a} />
			))}
		</div>
	);
}

export default RestaurantsContainer;
