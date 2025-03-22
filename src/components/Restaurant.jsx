function Restaurant(props) {
	return (
		<div className="Restaurant">
			<h2>{props.restaurant.name}</h2>
			<ul>
				<li>Food Offered: {props.restaurant.cuisine}</li>
				<li>Rating: {props.restaurant.rating}</li>
				<li>Address: {props.restaurant.address}</li>
				<li>Contact: {props.restaurant.phone}</li>
				<h3>Hours:</h3>
				<ul>
					{props.restaurant.hours.map((a) => (
						<li>a</li>
					))}
				</ul>
			</ul>
		</div>
	);
}

export default Restaurant;
