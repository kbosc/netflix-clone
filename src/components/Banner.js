import React, { useState, useEffect } from 'react'
import "./Banner.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import requests from "../config/Request"
import axios from 'axios';
import Quickview from './QuickView';
import { Link } from "react-router-dom"

export default function Banner() {
    const [movie, setMovie] = useState([])
    const [popup, setPopup] = useState(false)

    function handleClickPopup() {
        popup ? setPopup(false) : setPopup(true) 
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData()
    },[])

    function truncateText(string, numberOfWord) {
        return string?.length > numberOfWord ? string.substring(0, numberOfWord - 1) + "..." : "Nous sommes désolé mais il n'y a pas de description";
    }

    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }

    // console.log(popup);

  return (
    <header className='banner' style={bannerStyle}>
        <div className='banner__content'>
            <h1 className='banner__title'>
                {movie?.title || movie?.original_title || movie?.name}
            </h1>
            <p className='banner__description'>
                {truncateText(movie.overview, 100)}
                {/* {movie.overview ? truncateText(movie.overview, 100) : "Nous sommes désolé mais il n'y a pas de description"} */}
            </p>
            <div className='banner__buttons'>
                <Link to={`/video/${movie?.id}`}>
                    <button className='banner__button banner__button--play'>
                        <PlayArrowIcon />
                        Lecture
                    </button>
                </Link>
                <button className='banner__button' onClick={handleClickPopup}>
                    <HelpOutlineIcon />
                    Plus d'infos
                </button>
            </div>
        </div>
        <Quickview
            bannerStyle={bannerStyle}
            movie={movie}
            popup={handleClickPopup}
            popupStatut={popup}
        />
    </header>
  )
}
