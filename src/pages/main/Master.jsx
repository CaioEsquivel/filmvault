import './Master.css'
import logo from '../../assets/logo.png'

import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

import { SwiperSlider } from '../../components/SwiperSlider/SwiperSlider'
import { ArchiveCase } from '../../components/ArchiveCase/ArchiveCase'


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
                    <NavLink to='register' className={({isActive})=> isActive?'aside-link-active':''}><i className="ri-inbox-archive-line"></i> Vault Archive</NavLink>
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
                    <div className="section-swiper">

                    <SwiperSlider/>


                    </div>

                    <div className="section-archive">
                        <div className="archive-top">
                            <p><i className="ri-arrow-right-s-line"></i> VAULT ARCHIVE</p>
                            <a href="#">VIEW ALL FILES <i className="ri-arrow-right-long-line"></i></a>
                        </div>
                        <div className="archive-case-container">

                            <ArchiveCase />

                        </div>
                    </div>
                </section>

                
            </div>

            
        </main>

        <footer class="site-footer">
            <div class="footer-top">
                <div class="footer-brand">
                <h4>VAULT<span>_</span>ARCHIVE</h4>
                <p>Sistema de armazenamento seguro. Todos os dados criptografados.</p>
                </div>

                <div class="footer-col">
                <h5>NAVEGAÇÃO</h5>
                <a href="#">Início</a>
                <a href="#">Catálogo</a>
                <a href="#">Sobre</a>
                </div>

                <div class="footer-col">
                <h5>SISTEMA</h5>
                <a href="#">Status: <span class="status-dot"></span> Online</a>
                <a href="#">256-bit Encryption</a>
                <a href="#">API Docs</a>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 VAULT ARCHIVE — TODOS OS DIREITOS RESERVADOS</p>
                <p class="footer-code">// build_0x7F3A</p>
            </div>
            </footer>
        </>
    )
}

