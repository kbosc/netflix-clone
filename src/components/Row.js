import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect }  from "react";
import Skeleton from '@mui/material/Skeleton';
import { Link } from "react-router-dom";
import axios from "axios";

import { addFavoriteSearch, removeFavoriteSearch } from '../store';

export default function Row({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  let moviesId = useSelector(state => state.dataSearchTMDB.favorite)
  const baseUrl = "https://image.tmdb.org/t/p/original"
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const request = await axios
      .get(fetchUrl)
      .catch((error) => console.log(error.toJSON()));
      setMovies(request.data.results)
      setIsLoading(false);
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map(movie => (
          <div key={movie.id}>
            <Link to={`/video/${movie.id}`}>
              <img
                src={isPoster ? `${baseUrl}/${movie.poster_path}`: `${baseUrl}/${movie.backdrop_path}`}
                alt={movie?.title || movie?.name || movie?.original_title}
                className="row__image"
              />
              {isLoading && <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={210} height={118} />}   
            </Link>
            {
              moviesId.includes(movie.id) && !isLoading ?
              <div className='card__button' onClick={() => dispatch(removeFavoriteSearch(movie.id))}>Supprimer</div>
              :
              <div className='card__button' onClick={() => dispatch(addFavoriteSearch(movie.id))}>Ajouter</div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

