import './CardPopup.css'
import placehold from '../../assets/placeholder.jpg'

import { useContext, useEffect, useState } from 'react'

import { KeyContext } from '../../context/KeyContext'
import { CardPopupContext } from '../../context/CardPopupContext'
import { CardToggleContext } from '../../context/CardToggleContext'
import { WishlistContext } from '../../context/WishlistContext'
import { WarningContext } from '../../context/WarningContext'


export const CardPopup=()=>{

    
    const {wishlistArr, setWishlistArr} = useContext(WishlistContext)
    
    const {cardPopupData, setCardPopupData} = useContext(CardPopupContext)
    const {api_key} = useContext(KeyContext)
    const {CardToggle, setCardToggle} = useContext(CardToggleContext)
    const {warningBool,setWarningBool} = useContext(WarningContext)
    


    const [deleteWish, setDeleteWish] = useState(false)

    const washlistDeleteFunction = ()=>{
        const wishArr = wishlistArr.filter(el=>el.id !== cardPopupData.id)
        setWishlistArr(wishArr)
        setDeleteWish(false)
        setCardToggle(false)
    }

    const washlistFunction = ()=>{
        if(wishlistArr?.some(el=>el.id === cardPopupData.id)) return
        setWishlistArr(prev => [...prev, cardPopupData])
    }

    useEffect(()=>{
        console.log(wishlistArr);
        if(wishlistArr.some(el=>el.id === cardPopupData.id)){
            setDeleteWish(true)
        }else{
            setDeleteWish(false)

        }

        
    },[cardPopupData])

    return(
    <>
        <div className={`popup-card ${CardToggle? 'popup-active':''}`}>
            <button onClick={()=>setCardToggle(false)}><i className="ri-close-line"></i></button>
            <h3>#{cardPopupData?.id}</h3>
        <div className="top-popup">
            <img src={`${cardPopupData?.backdrop_path?`https://image.tmdb.org/t/p/w500${cardPopupData?.poster_path}?api_key=${api_key}`:`${placehold}`}`} alt="" />
            <div className="top-popup-detail">
                <h2>{cardPopupData?.title}</h2>
                <p><i className="ri-star-fill"></i> {(cardPopupData?.vote_average)?.toFixed(1)}</p>
                <p>{cardPopupData?.release_date? new Date(cardPopupData?.release_date).getFullYear() : 'nulo'}</p>
                <p>{`${Math.floor(cardPopupData?.runtime / 60)}h ${cardPopupData?.runtime - (Math.floor(cardPopupData?.runtime / 60) * 60)}m`}</p>
                <p>Lançamento: {new Date(cardPopupData?.release_date).toLocaleDateString('pt-BR')}</p>
            </div>
        </div>
        <div className="description-popup">
            <p>{cardPopupData?.overview || 'Sem descrição'}</p>
            <div className="btn-popup">
                <a href={cardPopupData?.homepage || '#'} className={`${cardPopupData?.homepage === ''? 'homepage-delete':''}`} target='blank' >Assistir</a>
                <button onClick={()=>{washlistFunction(); setWarningBool(true)}}><i className="ri-bookmark-line"></i></button>
                <button className={`delete-washlist ${deleteWish?'delete-show':''}`} onClick={washlistDeleteFunction}><i className="ri-bookmark-2-line"></i></button>
            </div>
            
        </div>
        </div>
    </>
    )
}