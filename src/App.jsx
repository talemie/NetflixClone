import { useState } from "react";
import requests from "./commonResources/request.js";
import "./App.css";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner.jsx";
import Nav from "./components/Nav/Nav.jsx";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row
				title="Netflix Originals"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Commedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
