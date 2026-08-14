import {createContext, useState, useEffect} from 'react'
import { useContext } from 'react'
import { KeyContext } from './KeyContext'


export const GenreContext = createContext()

export const GenreProvider = ({children}) =>{
    
    const {api_key} = useContext(KeyContext)
    const [Genre, setGenre] = useState(null)

    const fetchArchiveGenre = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=pt-BR`)
        const data = await response.json()
        
        setGenre(data.genres)
            
        
    }

    useEffect(() => {
        if (api_key) fetchArchiveGenre()
    }, [api_key])
    useEffect(() => {
        console.log(Genre);
        
    }, [Genre])

    return(
            <GenreContext.Provider value={{Genre}}>
                {children}
            </GenreContext.Provider>
        )

}