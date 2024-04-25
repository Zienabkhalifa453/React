import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { LanguageContext } from "../context/Language";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseURL}/movie/popular?api_key=596497b2c041c315c8ad1bbe654380e5&language=${language}`);
            setMovies(response.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };
    fetchData();
}, [language,baseURL]);


  const handleDeleteMovie = (id) => {
    console.log(id);
    const updatedMoviesArr = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMoviesArr);
  };

  return (
    <>
      <h2>Movies List</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <div className="col" key={movie.id}>
                <MovieCard movieItem={movie} deleteMovie={handleDeleteMovie} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MovieList;
