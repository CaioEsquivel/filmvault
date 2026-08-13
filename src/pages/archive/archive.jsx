import './archive.css'

import { useState,useEffect } from 'react'

export const Archive = ()=>{


    const [api_key] = useState('9c680d9feb4e5432fd539ae8ae31a071') 

    const [pageNumber, setPageNumber] = useState(2)
    const [movieData, setMovieData] = useState(null)

    const archiveMovies = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${pageNumber}`)
        const data = await response.json()
        setMovieData(data.results)
    }
    console.log(movieData);
    

    useEffect(()=>{

        archiveMovies()

    },[pageNumber])


    return(
        <>
            <div className="archive-page-container">
                
            </div>
        </>
    )
}