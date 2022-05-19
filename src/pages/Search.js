import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/Nav';

import RowSearch from '../components/RowSearch';

export default function Search() {
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
        <Nav />
        <div className='search'>
            <div className='search__title'>
                Titres associés à :
            </div>
            <RowSearch/>
        </div>
    </>
  )
}