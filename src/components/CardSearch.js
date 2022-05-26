import React from 'react'
import { useDispatch } from "react-redux"
import { addFavoriteSearch } from '../store'
// import { useSelector } from "react-redux"

export default function CardSearch({movie}) {
  const dispatch = useDispatch()
  const baseUrl = "https://image.tmdb.org/t/p/original"

  // console.log(useSelector(state => state.dataSearchTMDB))

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
      <div className='card__add' onClick={() => dispatch(addFavoriteSearch(movie.id))}>Add</div>
    </div>
  )
}
