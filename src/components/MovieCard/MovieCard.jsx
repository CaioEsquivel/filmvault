import './MovieCard.css'
import placehold from '../../assets/placeholder.jpg'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { KeyContext } from '../../context/KeyContext'
import { GenreContext } from '../../context/GenreContext'
import { CardPopupContext } from '../../context/CardPopupContext'
import { CardToggleContext } from '../../context/CardToggleContext'
import { LoginBoolContext } from '../../context/LoginBoolContext'

export const MovieCard = ({data})=>{

    // const [api_key] = useState('9c680d9feb4e5432fd539ae8ae31a071')
    const {api_key} = useContext(KeyContext)
    const {Genre} = useContext(GenreContext)
    const {cardPopupData,setCardPopupData} = useContext(CardPopupContext)
    const {CardToggle, setCardToggle} = useContext(CardToggleContext)
    const {loginBool,setLoginBool} = useContext(LoginBoolContext)


    // const [Genre, setGenre] = useState(null)

    // const fetchArchiveGenre = async ()=>{
    //     const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=pt-BR`)
    //     const data = await response.json()
        
    //     setGenre(data.genres)
            
    const detailedMovieHandle = async(id)=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR`)
        const data = await response.json()
        setCardPopupData(data)
    }

    return(
        <>
        <div className="archive-case"  onClick={()=>{
            detailedMovieHandle(data.id)
            setCardToggle(true)
            }} >
            <div className="top-text">
                CASE
                <span> #{data.id}</span>
            </div>
            <img src={`${data.backdrop_path?`https://image.tmdb.org/t/p/w500${data.poster_path}?api_key=${api_key}`:`${placehold}`}`} alt="" />
            <div className="bottom-text">
                <div className="case-details">
                    <div className="detail-top">
                        <h3>{data?.title}</h3>
                        <div className="case-details-extra">
                        <p>{data?.release_date? new Date(data?.release_date).getFullYear() : 'nulo'}</p>
                        <div className="archive-details-dot"></div>
                        <p><i className="ri-star-fill"></i> {(data?.vote_average).toFixed(1)}</p>
                    </div>
                    <div className="detail-bottom">
                    {(data?.genre_ids ?? data?.genres)?.slice(0,2).map(genreItem=>{
                        const genreId = typeof genreItem === 'object' ? genreItem.id : genreItem
                         const genre = Genre?.find(genreArr => genreId === genreArr.id)

                        return <p key={genre?.id ?? genreId}>{genre?.name}</p>
                    })}
                    
                    </div>

                    </div>
                </div>
                <div className="case-lock">
                    {loginBool?<i class="ri-earth-line"></i>:<i class="ri-lock-fill"></i>}
                </div>
            </div>
        </div>
        </>
    )
}