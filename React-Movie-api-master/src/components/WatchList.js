import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWatchList } from "../store/slices/counter";

const Watchlist = () => {
  const favorites = useSelector(state => state.counter.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromWatchList = (movieId) => {
    dispatch(removeFromWatchList({ id: movieId }));
  };
  return (
    <div className="container mt-3">
      <h2>Watch List</h2>
      <hr />
      <div className="row">
        {favorites.map((movie) => (
          <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <button
                  className="btn btn-outline-danger btn-block w-100"
                  onClick={() => handleRemoveFromWatchList(movie.id)}
                >
                  Remove from Watchlist
                </button>
              </div>
              <div className="card-footer">
                <Link
                  to={`/movie-details/${movie.id}`}
                  className="btn btn-outline-warning btn-block w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
