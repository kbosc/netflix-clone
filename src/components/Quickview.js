import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

export default function Quickview({bannerStyle, movie, popup, popupStatut}) {
  return (
    <div className={`quickView ${popupStatut && "open"}`}>
        <div className='quickView__banner' style={bannerStyle}>
            <div className='quickView__content'>
                <h3 className='quickView__title'>
                    {movie?.title || movie?.original_title || movie?.name}
                </h3>
                <p>
                    {movie.overview}
                </p>
            </div>
            <button className='quickView__close' onClick={popup}>
                <CancelIcon />
            </button>
        </div>
    </div>
  )
}
