import React from 'react'
// import { useParams } from 'react-router'

export default function Video() {
    // let { id } = "https://www.youtube.com/watch?v=2z1T7V7-tqs&list=RD2z1T7V7-tqs&start_radio=1";
    let id = "8lZki_Z35N0";
    // let { id } = useParams();
    // console.log(id); 
  return (
    <div className='video'>
        <iframe
            // src={id}
            src={`https://www.youtube.com/embed/${id}`}
            title="video"
            frameBorder="0"
            allowFullScreen
        ></iframe>
    </div>
  )
}
