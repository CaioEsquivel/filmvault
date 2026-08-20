import './wishlist.css'
import { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import { MovieCard } from '../../components/MovieCard/MovieCard'

export const Wishlist =()=>{

    const {wishlistArr, setWishlistArr} = useContext(WishlistContext)


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
        </div>
        </>
    )
}