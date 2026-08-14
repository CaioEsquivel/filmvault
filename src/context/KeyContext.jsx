import {createContext, useState, useEffect} from 'react'

export const KeyContext = createContext()

export const KeyProvider = ({children}) =>{
    const [api_key] = useState('9c680d9feb4e5432fd539ae8ae31a071')

    return(
        <KeyContext.Provider value={{api_key}}>
            {children}
        </KeyContext.Provider>
    )
}