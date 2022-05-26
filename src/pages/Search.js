import React, { useEffect, useState } from 'react'
import axios from 'axios';

import CardSearch from '../components/CardSearch';

export default function Search() {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("super");
    // const [search, setSearch] = useState("code");

    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
          )
          .then((res) => setMoviesData(res.data.results));
      }, [search]);


  return (
    <>  
        <div className='search'>
            <div className='search__text'>
                Titres associés à :
                <form className='search__text--form'>
                    <input 
                    type="text" 
                    placeholder='Titres, personnes, genres' 
                    id='search-input'
                    onChange={(e) => setSearch(e.target.value)}
                    className='search__text--form__input'/> 
                </form>
            </div>
            <div className='search__card'>
                {moviesData.slice(0, 12).map((movie) => (

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