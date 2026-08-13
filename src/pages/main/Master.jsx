import './Master.css'
import logo from '../../assets/logo.png'

import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Dashboard } from '../dashboard/dashboard'
import { Footer } from '../../components/Footer/Footer'


export const Master = ()=>{
    

    


    return(
        <>
        <main>
            <aside>
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
                        <p>user: neowather</p>
                        <p>status: online</p>
                        <p>clearance: level <span>1</span></p>
                        <p>vault access: <span className='terminal-status'> Granted</span></p>
                    </div>
                </div>

                <nav className='aside-links'>
                    <NavLink to='/' className={({isActive})=> isActive?'aside-link-active':''} ><i className="ri-home-4-fill"></i> dashboard</NavLink>
                    <NavLink to='archive' className={({isActive})=> isActive?'aside-link-active':''}><i className="ri-inbox-archive-line"></i> Vault Archive</NavLink>
                    <NavLink to='register' className={({isActive})=> isActive?'aside-link-active':''}><i className="ri-list-check"></i> categories</NavLink>
                    <NavLink to='register' className={({isActive})=> isActive?'aside-link-active':''}><i className="ri-bookmark-fill"></i> Watchlists</NavLink>
                    <NavLink to='register' className={({isActive})=> isActive?'aside-link-active':''}><i className="ri-star-fill"></i> Favorites</NavLink>
                    <NavLink to='register' className={({isActive})=> isActive?'aside-link-active':''}><i className="ri-settings-3-fill"></i> Settings</NavLink>
                    <NavLink to='/' className='aside-logout'><i className="ri-logout-box-r-fill"></i> Logout</NavLink>
                </nav>

                <div className="aside-status">
                    <div className="terminal-title">
                        <i className="ri-arrow-right-s-line"></i>
                        VAULT STATUS
                    </div>
                    <div className="terminal-content-padlock">

                        <div className="terminal-padlock">
                            <i className="ri-lock-2-fill"></i>
                        </div>
                        <div className="padlock-content">
                            <h3>SECURE</h3>
                            <span>
                                <p>256-bit</p>
                                <p>encryption</p>
                            </span>
                        </div>

                    </div>

                    <div className="terminal-bar">
                        <div className="bar-loading"></div>
                        100%
                    </div>
                </div>
                
            </aside>
            <div className='main-content'>
                <header>
                    <div className="header-search-bar">
                        <input type="text"  placeholder='Pesquisar arquivo...' />
                        <button><i className="ri-search-line"></i></button>
                    </div>
                    <button className="header-profile"><i className="ri-user-fill"></i></button>
                </header>
                <section>


                    <Outlet/>


                </section>
                
                
            </div>

            
        </main>

                <Footer/>
        
        </>
    )
}

