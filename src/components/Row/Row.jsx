import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../commonResources/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// base url for the movie images
const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	//  fetching movies using use effect hook with fetchUrl dependency
	useEffect(() => {
		// fetch movies function
		async function fetchMovies() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchMovies();
	}, [fetchUrl]);
	// console.log(movies);
	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay:1
		}
	}
	function handleClick(movie) {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.title || movie?.name || movie?.original_name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);					
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	}
	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row__posters">
				{movies?.map((movie) => (
					<img key={movie.id}
						onClick={() => handleClick(movie)}
						className={`row__poster ${isLargeRow && "row__posterLarge"}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			<div style={{ padding: '40px' }}>
				{trailerUrl && <YouTube videoId={trailerUrl} opts={ opts} />}
			</div>
		</div>
	);
}

export default Row;
