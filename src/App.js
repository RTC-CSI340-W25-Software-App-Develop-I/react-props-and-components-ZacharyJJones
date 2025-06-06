import "./App.css";
import { RestaurantsContainer } from "./components/RestaurantsContainer";

//App is the root of our application and where we load in our components.
function App() {
	return (
		<div className="App">
			<RestaurantsContainer />
		</div>
	);
}

export default App;
