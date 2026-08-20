import {createContext, useState, useEffect} from 'react'
import { useContext } from 'react'


export const FilterMenuContext = createContext()

export const FilterMenuProvider = ({children}) =>{
    
    const [filterMenuBool, setFilterMenuBool] = useState(false)



    return(
            <FilterMenuContext.Provider value={{filterMenuBool, setFilterMenuBool}}>
                {children}
            </FilterMenuContext.Provider>
        )

}