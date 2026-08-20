import './wishlist.css'
import { useContext, useEffect, useState } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import { MovieCard } from '../../components/MovieCard/MovieCard'

export const Wishlist =()=>{

    const {wishlistArr, setWishlistArr} = useContext(WishlistContext)
    const [wishState, setWishState] = useState(false)

    useEffect(()=>{
        if(wishlistArr?.length === 0){
            setWishState(true)
        }else{
            setWishState(false)

        }
    },[wishlistArr])

    return(
        <>
        <div className="wishlist-top">

        </div>

        <div className="wishlist-content">
            {wishlistArr?.map(el=>{
                return(
                    <MovieCard data={el} key={el.id}/>
                )
            })}

            <p className={`wish-message ${wishState? 'wish-message-show':''}`}>Nenhum item adicionado.</p>

        </div>
        </>
    )
}