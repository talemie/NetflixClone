const API_KEY = "27107d817d15bd1c1eb3e0a5af716cea";
const APIreadaccesstoken =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzEwN2Q4MTdkMTViZDFjMWViM2UwYTVhZjcxNmNlYSIsInN1YiI6IjY1NjdlMjg5NjgwYmU4MDEwMzNkZWY5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PMRDri72mS3T3M-HhVfCqQP69F22gTh9rb7zmp9sW-M";

	
const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
