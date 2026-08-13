import './ArchiveCase.css'
import { useEffect, useState } from 'react'
import { MovieCard } from '../../components/MovieCard/MovieCard'

export const ArchiveCase = ()=>{

    const [Data, setData] = useState(null)
    const [api_key] = useState('9c680d9feb4e5432fd539ae8ae31a071')

 
    const fetchArchiveCase = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
        const data = await response.json()
        
        setData(data.results.slice(0, 6))    
        
    }
    

    useEffect(()=>{

    fetchArchiveCase()

    },[])

    return(
        <>
            {Data?.map(el=>{
                return(
                    <MovieCard data={el} key={crypto.randomUUID()} />
                )
            })}
        </>
    )
} 