import {createContext, useState, useEffect} from 'react'
import { useContext } from 'react'


export const CardToggleContext = createContext()

export const CardToggleProvider = ({children}) =>{
    
    const [CardToggle, setCardToggle] = useState(false)


    return(
            <CardToggleContext.Provider value={{CardToggle,setCardToggle}}>
                {children}
            </CardToggleContext.Provider>
        )

}