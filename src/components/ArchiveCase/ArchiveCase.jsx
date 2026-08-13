import './ArchiveCase.css'
import { useEffect, useState } from 'react'

export const ArchiveCase = ()=>{

    const [Data, setData] = useState(null)
    const [Genre, setGenre] = useState(null)
    const [api_key] = useState('9c680d9feb4e5432fd539ae8ae31a071')

    const fetchArchiveGenre = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=pt-BR`)
        const data = await response.json()
        
        setGenre(data.genres)
            
        
    }
    const fetchArchiveCase = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`)
        const data = await response.json()
        
        setData(data.results.slice(0, 6))    
        
    }
    

    useEffect(()=>{

    fetchArchiveCase()
    fetchArchiveGenre()

    },[])

    return(
        <>
            {Data?.map(el=>{
                return(
                    <div className="archive-case" key={el.id}>
                        <div className="top-text">
                            CASE
                            <span> #{el.id}</span>
                        </div>
                        <img src={`https://image.tmdb.org/t/p/w500${el.backdrop_path}?api_key=${api_key}`} alt="" />
                        <div className="bottom-text">
                            <div className="case-details">
                                <div className="detail-top">
                                    <h3>{el.title}</h3>
                                    <div className="case-details-extra">
                                    <p>{new Date(el.release_date).getFullYear()}</p>
                                    <div className="archive-details-dot"></div>
                                    <p><i class="ri-star-fill"></i> {(el.vote_average).toFixed(1)}</p>
                                </div>
                                <div className="detail-bottom">
                                {el.genre_ids.slice(0,2).map(genreId=>{
                                    const genre = Genre?.find(genreArr=>{
                                        return genreId === genreArr.id
                                    })

                                    return <p key={genre?.id}>{genre?.name}</p>
                                })}
                                </div>

                                </div>
                            </div>
                            <div className="case-lock">
                                <i class="ri-lock-fill"></i>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
} 