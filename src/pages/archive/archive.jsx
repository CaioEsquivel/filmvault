import './archive.css'

import { useState,useEffect } from 'react'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { PaginateButton } from '../../components/PaginateButton/PaginateButton'

export const Archive = ()=>{


    const [api_key] = useState('9c680d9feb4e5432fd539ae8ae31a071') 

    const [pageNumber, setPageNumber] = useState(1)
    const [movieData, setMovieData] = useState(null)

    console.log(movieData);
    
    

    const archiveMovies = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${pageNumber}`)
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
                    <MovieCard data={el} key={el.id}/>
                )
            })}
        </div>

        <PaginateButton data={movieData} page={pageNumber} setPage={setPageNumber} />
        {/* <div className="archive-page-paginate">
            <button className='last-prev' onClick={()=>setPageNumber(1)} ><i class="ri-arrow-left-double-line"  ></i></button>
            <button className={`${pageNumber <= 1? 'btn-disable':''}`} onClick={()=>setPageNumber(pageNumber - 1)}><i className="ri-arrow-left-s-line"></i></button>
            <button className={`${pageNumber >= 500 || pageNumber >= movieData?.total_pages ? 'btn-disable':''}`} onClick={()=>setPageNumber(pageNumber + 1)} ><i className="ri-arrow-right-s-line"></i></button>
            <button className='last-next' onClick={()=>{
                movieData?.total_pages > 500 ? setPageNumber(500) : setPageNumber(movieData?.total_pages)
                
            }}><i className="ri-arrow-right-double-line"></i></button>
        <p className='page-number'>{pageNumber}... of {movieData?.total_pages}</p>
        </div> */}

        </>
    )
}