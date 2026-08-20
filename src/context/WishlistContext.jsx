import { createContext, useState } from "react";

export const WishlistContext = createContext()

export const WishlistProvider = ({children})=>{

    const [wishlistArr, setWishlistArr] = useState([])

    return(
        <WishlistContext.Provider value={{wishlistArr, setWishlistArr}}>
            {children}
        </WishlistContext.Provider>
    )
}