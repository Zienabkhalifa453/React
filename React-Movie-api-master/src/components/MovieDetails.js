import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=596497b2c041c315c8ad1bbe654380e5`)
      .then((res) => {
        setMovieDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]); 
//params.id
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Movie Details</h2>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            className="card-img-top"
            alt={movieDetails.title}
          />
          <div className="card-body">
            <h5 className="card-title">{movieDetails.title}</h5>
            <p className="card-text">{movieDetails.overview}</p>
            <p className="card-text">Release Date: {movieDetails.release_date}</p>
            <p className="card-text">Popularity: {movieDetails.popularity}</p>
            <p className="card-text">Vote Average: {movieDetails.vote_average}</p>
          </div>
          <Link className="btn btn-warning mx-auto d-block w-50" to="/">Back To List</Link>
        </div>
    </div>
  );
}
