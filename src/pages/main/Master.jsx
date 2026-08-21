import './Master.css'
import logo from '../../assets/logo.png'

import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Dashboard } from '../dashboard/dashboard'
import { Footer } from '../../components/Footer/Footer'
import {CardPopup} from '../../components/CardPopup/CardPopup'
import { BackgroundBlur } from '../../components/BackgroundBlur/BackgroundBlur'
import { useContext } from 'react'
import { InputContext } from '../../context/InputContext'
import {FilterMovieArrContext} from '../../context/FilterMovieArrContext'
import { WarningAdvise } from '../../components/WarningAdvise/WarningAdvise'
import { LoginBoolContext } from '../../context/LoginBoolContext'
import { AsidePopupContext } from '../../context/AsidePopupContext'
import { FilterMenuContext } from '../../context/FilterMenuContext'
import { SearchPopupContext } from '../../context/SearchPopupContext'
import { CardToggleContext } from '../../context/CardToggleContext'


export const Master = ()=>{

    const {inputValue, setInputValue} = useContext(InputContext)
    const {filterMovieArr,setFilterMovieArr} = useContext(FilterMovieArrContext)
    const [genreNames,setGenreNames] = useState([])
    const [menuBool, setMenuBool] = useState(false)
    const {loginBool,setLoginBool} = useContext(LoginBoolContext)
    const {asidePopup, setAsidePopup} = useContext(AsidePopupContext)
    const {filterMenuBool, setFilterMenuBool} = useContext(FilterMenuContext)
    const {searchPopup, setSearchPopup} = useContext(SearchPopupContext)
    const [rating, setRating] = useState(1);
        const {CardToggle, setCardToggle} = useContext(CardToggleContext)
    
    

    const [pageNumber, setPageNumber] = useState(1)
    const [userStorage, setUserStorage] = useState(null)
    useEffect(()=>{
        if(asidePopup || filterMenuBool|| CardToggle){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = ''
        }
        
        return()=>{
            document.body.style.overflow = ''
            
        }
    },[asidePopup,filterMenuBool, CardToggle])
    

    useEffect(()=>{
        if(!localStorage.getItem('currentUser')){
            setLoginBool(false)
        }else{
            setLoginBool(true)
        }

        setUserStorage(JSON.parse(localStorage.getItem('currentUser')))
    },[])


    
    

    const handleInputClick = async ()=>{
        setGenreNames([])
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9c680d9feb4e5432fd539ae8ae31a071&query=${inputValue}`)
        const data = await response.json()
        setFilterMovieArr(data)
    }
    
    
    return(
        <>
        <main>
            <aside className={`${asidePopup?'aside-open':''}`}>
                <button onClick={()=>setAsidePopup(false)} className='aside-close'><i className="ri-close-line"></i></button>
                <div className="aside-logo">
                    <img src={logo} alt="" />
                    <div>
                        <h1>Film Vault</h1>
                        <p>Acces. watch. Escape</p> 
                    </div>
                </div>

                <div className="aside-terminal">
                    <div className="terminal-title">
                        <i className="ri-arrow-right-s-line"></i>
                        TERMINAL
                    </div>
                    <div className="terminal-content">
                        <p>user: {`${loginBool?userStorage?.name:'UNKNOWN'}`}</p>
                        <p>status: {loginBool?'connected':'disconnected'}</p>
                        <p>clearance: level <span className={`${loginBool?'':'red-clearance'}`}>1</span></p>
                        <p>vault access: <span className={`terminal-status ${loginBool?'':'terminal-error'}`}> {loginBool?'Granted':'Not granted'}</span></p>
                    </div>
                </div>

                <nav className='aside-links'>
                    <NavLink to='/' onClick={()=>setAsidePopup(false)} className={({isActive})=> isActive?'aside-link-active':''} ><i className="ri-home-4-fill"></i> dashboard</NavLink>
                    <NavLink onClick={()=>setAsidePopup(false)} to='archive' className={({isActive})=> isActive?'aside-link-active':''}><i className="ri-inbox-archive-line"></i> Vault Archive</NavLink>
                    <NavLink onClick={()=>setAsidePopup(false)} to='category' className={({isActive})=> isActive?'aside-link-active':''}><i className="ri-list-check"></i> categories</NavLink>
                    <NavLink onClick={()=>setAsidePopup(false)} to='wishlist' className={({isActive})=> isActive?'aside-link-active':''}><i className="ri-bookmark-fill"></i> Watchlists</NavLink>
                    <NavLink to='login' onClick={()=>{
                        setLoginBool(false)
                        setAsidePopup(false)
                        localStorage.removeItem('currentUser')
                        localStorage.removeItem('currentUserKey')
                    }} className='aside-logout'><i className="ri-logout-box-r-fill"></i> {loginBool?'Logout':'Logar'}</NavLink>
                </nav>

                <div className="aside-status">
                    <div className="terminal-title">
                        <i className="ri-arrow-right-s-line"></i>
                        VAULT STATUS
                    </div>
                    <div className="terminal-content-padlock">

                        <div className={`terminal-padlock ${loginBool?'':'padlock-error'}`}>
                            <i className="ri-lock-2-fill"></i>
                        </div>
                        <div className="padlock-content">
                            <h3 className={`${loginBool?'':'padlock-h3-error'}`}>{loginBool?'SECURE':'NOT SECURE'}</h3>
                            <span>
                                <p>256-bit</p>
                                <p>encryption</p>
                            </span>
                        </div>

                    </div>

                    <div className="terminal-bar">
                        <div className="bar-loading"></div>
                        {loginBool?'100%':'0%'}
                    </div>
                </div>
                
            </aside>
            <div className='main-content'>
                <header>
                    <button onClick={()=>setAsidePopup(!asidePopup)} className='menu-toggle'><i className="ri-menu-line"></i></button>
                    <div className={`header-search-bar ${searchPopup? 'search-open':''}`}>
                        <input type="text" value={inputValue}  placeholder='Pesquisar arquivo...' onChange={(e) => setInputValue(e.target.value)} />
                        <Link to='/category' onClick={()=>{
                            if(inputValue){
                                handleInputClick()
                                setPageNumber(1); 
                                setSearchPopup(false)  
                                setRating(1)
                            } 
                        }} ><i className="ri-search-line"></i></Link>
                    </div>


                    <div className="header-btn">
                    <button onClick={()=>setSearchPopup(!searchPopup)}><i className="ri-search-line"></i></button>



                        <div className="profile-div">

                            <button onClick={()=>setMenuBool(!menuBool)} className="header-profile"><i className="ri-user-fill"></i></button>

                            <div className={`profile-information ${menuBool?'profile-show':''} ${loginBool?'':'profile-div-error'}`}>
                                <button onClick={()=>setMenuBool(false)} ><i className="ri-close-line"></i></button>
                                <p>{`${loginBool?`nome: ${userStorage?.name} email: ${userStorage?.email}`:'NÃO LOGADO'}`}</p>
                            </div>
                        </div>
                    </div>
                </header>
                <section>


                    <Outlet context={{ pageNumber, setPageNumber, genreNames, setGenreNames, rating, setRating }} />


                </section>
                
                
            </div>

            
        </main>

        <Footer/>
        <CardPopup/>
        <BackgroundBlur/>
        <WarningAdvise content='Adicionado à wishlist' />

        

        
        
        
        </>
    )
}

