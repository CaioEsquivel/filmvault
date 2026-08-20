import {createContext, useState, useEffect} from 'react'
import { useContext } from 'react'


export const CardPopupContext = createContext()

export const CardPopupProvider = ({children}) =>{
    
    const [cardPopupData, setCardPopupData] = useState(null)


    return(
            <CardPopupContext.Provider value={{cardPopupData,setCardPopupData}}>
                {children}
            </CardPopupContext.Provider>
        )

}