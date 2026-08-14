import './categories.css'
import { useEffect,useState } from 'react'
import { KeyContext } from '../../context/KeyContext'
import { useContext } from 'react'
import { useAsyncError } from 'react-router-dom'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { PaginateButton } from '../../components/PaginateButton/PaginateButton'
import { GenreContext } from '../../context/GenreContext'

export const CategoriesPage = ()=>{

    const {api_key} = useContext(KeyContext)
    const {Genre} = useContext(GenreContext)

    const [pageNumber, setPageNumber] = useState(1)
    const [rating, setRating] = useState(1);
    const [movieArr,setMovieArr] = useState(null)
    const [filterMovieArr,setFilterMovieArr] = useState(null)
    const [genreNames,setGenreNames] = useState([])

    const filterGenreMovies = async ()=>{
        const genreQuery = genreNames.join(',')
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${pageNumber}${genreQuery?`&with_genres=${genreQuery}`:''}&vote_average.gte=${rating}`)
        const data = await response.json()
        setFilterMovieArr(data)

        if(pageNumber> data.total_pages){
            setPageNumber(1)
        }
    }
    

    const handleMovieDiscover = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${pageNumber}`)
        const data = await response.json()
        setMovieArr(data)
        setFilterMovieArr(data)

    }
    useEffect(()=>{
        filterGenreMovies()
        console.log(movieArr);
        
    },[pageNumber])

    useEffect(()=>{
        console.log(genreNames);
        
    },[[genreNames]])
    


    return(
    <>
    <div className="category-page">
        <div className="category-movie-container">
            <div className="top-category-text">
                Discover
            </div>
            <div className="category-page-container">
                {filterMovieArr?.results.map(el=>{
                    return(
                        <MovieCard data={el}/>
                    )
                })}
            </div>
            <PaginateButton data={filterMovieArr} page={pageNumber} setPage={setPageNumber} />

        </div>
        <div className="category-filter-container">
            {/* <h2>Filter</h2> */}
            <div className="filter-genre-list">
                <h3>Categorias</h3>
                {Genre?.map(el=>{
                    return(
                        <div className="genre-button" onClick={()=>setGenreNames(prev=>
                                prev.includes(el.id)? prev.filter(id=>id !== el.id) :[...prev,el.id]
                            )}>
                            <p>{el.name}</p>
                            <button className={`genre-button-individual ${genreNames?.includes(el.id)?'genre-btn-active':''}`} >
                                <span><i className="ri-check-line"></i></span>
                            </button>
                            
                        </div>
                    )
                })}
            </div>
            <div className="filter-rating-list">
                <h3>Avaliação</h3>
                <div className='genre-label'>
                    <label htmlFor="rating">Nota mínima</label>
                    <span className="rating-value">{parseFloat(rating).toFixed(1)}</span>
                </div>
                <input
                    type="range"
                    id="rating"
                    min="1"
                    max="10"
                    value={rating}
                    step="0.1"
                    onChange={(e) => setRating(e.target.value)}
                    className='rating-slider'
                />
            </div>

            <button className='filter-submit' onClick={filterGenreMovies}>Pesquisar <i class="ri-search-line"></i></button>
            <button className='filter-reset' onClick={}>Reset</button>
        </div>

    </div>
    </>
    )
}