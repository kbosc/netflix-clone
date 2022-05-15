import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from '../config/Request'

export default function Home() {
  return (
    <div>
        <Banner/>
        <Row 
        title="Programmes originaux Netflix" 
        fetchUrl={requests.fetchNetflixOriginals}
        isPoster={true}
        />
        <Row 
        title="Tendance actuelles" 
        fetchUrl={requests.fetchTrending}
        />
        <Row 
        title="Les mieux notés" 
        fetchUrl={requests.fetchTopRated}
        />
        <Row 
        title="Films romantique" 
        fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
        title="Films d'horreur" 
        fetchUrl={requests.fetchHorrorMovies}
        />
        <Row 
        title="Comédies" 
        fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
        title="Documentaires" 
        fetchUrl={requests.fetchDocumentaries}
        />
      {/* <div className='test'></div> */}
    </div>
  )
}
