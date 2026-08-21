 import {createContext, useState} from 'react'
 
 
 export const AsidePopupContext = createContext()
 
 export const AsidePopupProvider = ({children}) =>{
     
     const [asidePopup, setAsidePopup] = useState(false)
 
 
     return(
             <AsidePopupContext.Provider value={{asidePopup, setAsidePopup}}>
                 {children}
             </AsidePopupContext.Provider>
         )
 
 }