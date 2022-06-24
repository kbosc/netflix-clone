import React, { useState, useEffect }  from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addFavoriteSearch, removeFavoriteSearch } from '../store'

export default function Row({ title, fetchUrl, isPoster }) {
  let moviesId = useSelector(state => state.dataSearchTMDB.favorite)
  const baseUrl = "https://image.tmdb.org/t/p/original"
  const [movies, setMovies] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const request = await axios
      .get(fetchUrl)
      .catch((error) => console.log(error.toJSON()));
      setMovies(request.data.results)
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
            </Link>
            {
              moviesId.includes(movie.id) ?
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

