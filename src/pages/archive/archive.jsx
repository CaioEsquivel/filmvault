import './archive.css'

import { useState,useEffect } from 'react'
import { MovieCard } from '../../components/MovieCard/MovieCard'

export const Archive = ()=>{


    const [api_key] = useState('9c680d9feb4e5432fd539ae8ae31a071') 

    const [pageNumber, setPageNumber] = useState(1)
    const [movieData, setMovieData] = useState(null)

    console.log(movieData);
    
    

    const archiveMovies = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${pageNumber}`)
        const data = await response.json()
        setMovieData(data)
    }
    console.log(movieData);
    

    useEffect(()=>{

        archiveMovies()

    },[pageNumber])


    return(
        <>
        <div className="archive-page-top">
            <p>VAULT ARCHIVE</p>
            
        </div>
        <div className="archive-page-container">
            {movieData?.results.map(el=>{
                return(
                    <MovieCard data={el}/>
                )
            })}
        </div>
        <div className="archive-page-paginate">
            <button className='last-prev' onClick={()=>setPageNumber(1)} ><i class="ri-arrow-left-double-line"  ></i></button>
            <button className={`${pageNumber <= 1? 'btn-disable':''}`} onClick={()=>setPageNumber(pageNumber - 1)}><i className="ri-arrow-left-s-line"></i></button>
            <button className={`${pageNumber >= 500 ? 'btn-disable':''}`} onClick={()=>setPageNumber(pageNumber + 1)} ><i className="ri-arrow-right-s-line"></i></button>
            <button className='last-next' onClick={()=>setPageNumber(500)}><i className="ri-arrow-right-double-line"></i></button>
        <p className='page-number'>{pageNumber}... of {movieData?.total_pages}</p>
        </div>

        </>
    )
}