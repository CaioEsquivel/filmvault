import './categories.css'
import { useEffect,useState } from 'react'
import { KeyContext } from '../../context/KeyContext'
import { useContext } from 'react'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { PaginateButton } from '../../components/PaginateButton/PaginateButton'
import { GenreContext } from '../../context/GenreContext'
import {FilterMovieArrContext} from '../../context/FilterMovieArrContext'
import {InputContext} from '../../context/InputContext'
import { useOutletContext } from 'react-router-dom'


export const CategoriesPage = ()=>{

    const { pageNumber, setPageNumber, genreNames, setGenreNames } = useOutletContext()


    const {filterMovieArr,setFilterMovieArr} = useContext(FilterMovieArrContext)
    const {api_key} = useContext(KeyContext)
    const {Genre} = useContext(GenreContext)
    const {inputValue, setInputValue} = useContext(InputContext)

    const [rating, setRating] = useState(1);
    const [movieArr,setMovieArr] = useState(null)
    // const [genreNames,setGenreNames] = useState([])



    const resetMovies = async ()=>{
        setInputValue('')
        setPageNumber(1)
        const genreQuery = genreNames.join(',')
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${pageNumber}${genreNames.length ? `&with_genres=${genreQuery}` : ''}&vote_average.gte=${rating}`
        const response = await fetch(url)
        const data = await response.json()
        setFilterMovieArr(data)

        if(pageNumber> data.total_pages){
            setPageNumber(1)
        }
    }
    const filterGenreMovies = async ()=>{

        const genreQuery = genreNames.join(',')
        const url = inputValue
        ? `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&page=${pageNumber}&query=${inputValue}`
        : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${pageNumber}${genreNames.length ? `&with_genres=${genreQuery}` : ''}&vote_average.gte=${rating}`
        const response = await fetch(url)
        const data = await response.json()
        setFilterMovieArr(data)

        if(pageNumber> data.total_pages){
            setPageNumber(1)
        }
    }
    

    const handleMovieDiscover = async ()=>{
        setInputValue('')
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=1`)
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
                {filterMovieArr?.results?.map(el=>{
                    return(
                        <MovieCard data={el} key={el.id}/>
                    )
                })}

                <div className={`not-found-movies ${filterMovieArr?.results?.length === 0? 'text-active':''}`}>
                    <p>Nenhum filme encontrado.</p>
                </div>
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

            <button className='filter-submit' onClick={resetMovies}>Pesquisar <i class="ri-search-line"></i></button>
            <button className='filter-reset' onClick={()=>{
                handleMovieDiscover()
                setGenreNames([])
                setRating(1)
                setPageNumber(1)
            }} >Reset</button>
        </div>

    </div>
    </>
    )
}