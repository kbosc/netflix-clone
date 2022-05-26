import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from "react-redux"
import { API_KEY } from "../config/Request"
import CardSearch from '../components/CardSearch';

export default function UserPage() {
  const [listfavorites, setListFavorites] = useState([]);
  let moviesId = useSelector(state => state.dataSearchTMDB.favorite)
  
  useEffect(() => {

    for(let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=${API_KEY}&language=fr-FR&external_source=imdb_id`
        )
        .then((res) => setListFavorites((listfavorites) => [...listfavorites, res.data]));
    }

  }, [moviesId]);


  console.log(listfavorites)

  return (
    <div className='user'>
      <h2>Votre liste :</h2>
      <div className='user__card'>
                {listfavorites.length > 0 && listfavorites.map((favorite) => (
                    <CardSearch
                    key={favorite.id}
                    movie={favorite}
                    />
                  ))
                }
      </div>
    </div>
  )
}
