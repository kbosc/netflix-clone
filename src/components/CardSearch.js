import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addFavoriteSearch, removeFavoriteSearch } from '../store'

export default function CardSearch({movie}) {
  let moviesId = useSelector(state => state.dataSearchTMDB.favorite)
  const dispatch = useDispatch()
  const baseUrl = "https://image.tmdb.org/t/p/original"

  return (
    <div className='card'>
      <img
        src={movie.poster_path ?
        `${baseUrl}/${movie.poster_path}`
        :
        "./images/poster.jpg"
        }
        alt={movie?.title || movie?.name || movie?.original_title}
        className="card__image"
      /> 
      {
        moviesId.includes(movie.id) ?
        <div className='card__modify' onClick={() => dispatch(removeFavoriteSearch(movie.id))}>Supprimer</div>
        :
        <div className='card__modify' onClick={() => dispatch(addFavoriteSearch(movie.id))}>Ajouter</div>
      }
    </div>
  )
}
