

 import {createContext, useState} from 'react'
 
 
 export const SearchPopupContext = createContext()
 
 export const SearchPopupProvider = ({children}) =>{
     
     const [searchPopup, setSearchPopup] = useState(false)
 
 
     return(
             <SearchPopupContext.Provider value={{searchPopup, setSearchPopup}}>
                 {children}
             </SearchPopupContext.Provider>
         )
 
 }