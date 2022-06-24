import React, { useEffect, useState } from 'react'
import axios from 'axios';

import CardSearch from '../components/CardSearch';
import { API_KEY } from "../config/Request"

export default function Search() {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("dragon");

    useEffect(() => {
        setMoviesData([])
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=fr-FR`
          )
          .then((res) => setMoviesData(res.data.results))
          .catch((error) => console.log(error.toJSON()));
      }, [search]);


  return (
    <>  
        <div className='search'>
            <div className='search__text'>
                Titres associés à :
                <form className='search__text--form'>
                    <input 
                    type="text" 
                    placeholder='Titres' 
                    id='search-input'
                    onChange={(e) => setSearch(e.target.value)}
                    className='search__text--form__input'/> 
                </form>
            </div>
            <div className='search__card'>
                {   moviesData.slice(0, 12).map((movie) => (
                        <CardSearch
                        key={movie.id}
                        movie={movie}
                        />
                    ))
                }
            </div>
        </div>
    </>
  )
}