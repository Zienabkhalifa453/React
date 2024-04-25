import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";
import  {removeFromWatchList,addToWatchList} from "../store/slices/counter";
export default function MovieCard({ movieItem, deleteMovie }) {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] =useState(false);
  const handleToggle = () => {
    if (isFavorite) {
        dispatch(removeFromWatchList({ id: movieItem.id }));
    } else {
        dispatch(addToWatchList(movieItem));
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="card h-100 border-0 shadow-sm position-relative">
      <FontAwesomeIcon
        icon={isFavorite ? fasStar : farStar}
        style={{ color: 'yellow', fontSize: '30px', position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }}
        onClick={handleToggle}
      />
      <img
        src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
        className="card-img-top rounded-top"
        alt={movieItem.title}
      />
      <div className="card-body">
        <h5 className="card-title">{movieItem.title}</h5>
        <p className="card-text text-muted">{movieItem.overview}</p>
        <div className="row">
          <div className="col-12 mb-2">
            <button
              className="btn btn-outline-warning btn-block w-100"
              onClick={() => navigate(`/movie-details/${movieItem.id}`)}
            >
              View Details
            </button>
          </div>
          <div className="col-12 mb-2">
            {/* <button
              className="btn btn-outline-warning btn-block w-100"
              onClick={() => navigate(`/watch-list/${movieItem.id}`)}
            >
              Add to Watchlist
            </button> */}
          </div>
          <div className="col-12">
            <button
              className="btn btn-outline-danger btn-block w-100"
              onClick={() => deleteMovie(movieItem.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
