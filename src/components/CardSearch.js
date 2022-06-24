import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addFavoriteSearch, removeFavoriteSearch } from '../store'
import Skeleton from '@mui/material/Skeleton';

export default function CardSearch({movie}) {
  let moviesId = useSelector(state => state.dataSearchTMDB.favorite)
  const dispatch = useDispatch()
  const baseUrl = "https://image.tmdb.org/t/p/original"
  const isEmpty = Object.keys(movie).length === 0;


  return (
    <div className='card'>
      {isEmpty ? 
      // { !movie.poster_path ? 
        <Skeleton 
          variant="rectangular" 
          width={300} 
          height={400}
          // animation="wave"
          sx={{ bgcolor: 'grey.900' }}
        />
      :
      <>
      <img
        src={movie.poster_path ?
        `${baseUrl}/${movie.poster_path}`
        :
        "./images/poster.jpg"
        }
        alt={movie?.title || movie?.name || movie?.original_title}
        className="card__image"
      /> 
   
        <button 
        className='card__button' 
        onClick={ () => dispatch(moviesId.includes(movie.id) ? removeFavoriteSearch(movie.id) : addFavoriteSearch(movie.id) )}>{moviesId.includes(movie.id) ? "Supprimer" : "Ajouter"}</button>
      </>
      }
    </div>
  )
}
