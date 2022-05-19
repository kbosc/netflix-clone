import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

export default function FormSearch() {
    const [moviesData, setMoviesData] = useState([]);
    // const [search, setSearch] = useState("code");

    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=start&language=fr-FR`
          )
          .then((res) => setMoviesData(res.data.results));
      }, []);


  return (
    <>
        <form className='search'>
            <SearchIcon />
            <input type="text" placeholder='Titres, personnes, genres' id='search-input' className='search__input'/>
        </form>
        {/* <div className='result'>
            {moviesData.map((movie) => (
                <h2>{movie.title}</h2>
            )
            )}
        </div> */}
    </>
  )
}
