import './Master.css'
import logo from '../../assets/logo.png'
import runner from '../../assets/runnerbanner.png'
import tron from '../../assets/tronbanner.png'
import matrix from '../../assets/matrixbanner.png'
import { NavLink } from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, EffectFade, Parallax } from 'swiper/modules'


import 'swiper/css/effect-fade'
import 'swiper/css/parallax'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import {Swiper, SwiperSlide} from 'swiper/react'

// const swiper = new Swiper('.swiper', {
//   loop: true,
//   parallax: true,
//   effect: "fade",
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar"
//   }
// });
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

                    <Swiper
                    modules={[ Pagination, Scrollbar, EffectFade, Parallax]}
                    slidesPerView={1}
                    loop={true}
                    parallax={true}
                    effect='fade'
                    scrollbar={{
                        el: ".swiper-scrollbar"
                    }}
                    >
                        <SwiperSlide>
                            <div className="swiper-slide-content">

                                <img src={matrix} alt="" />
                                <div className="swiper-bg-gradient"></div>

                                <h3><i className="ri-arrow-right-s-line"></i>
                            FEATURE FILE</h3>


                                <h2>THE MATRIX</h2>

                                <div className="swiper-details">
                                    <p>1999</p>
                                    <div className="swiper-details-dot"></div>
                                    <p>2h 16m</p>
                                    <div className="swiper-details-dot"></div>
                                    <p>R</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa quibusdam. Tempora nihil sunt, illo totam officiis hic quae fugiat optio consectetur explicabo veritatis dignissimos error voluptas enim esse cum?</p>
                                <div className="swiper-btn">
                                    <button className='swiper-access-btn'><i className="ri-play-fill"></i> ACCESS FILE</button>
                                    <button className='swiper-list-btn'><i className="ri-add-line"></i> WATCH LIST</button>
                                </div>
                            </div>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <div className="swiper-slide-content">

                                <img src={tron} alt="" />
                                <div className="swiper-bg-gradient"></div>

                                <h3><i className="ri-arrow-right-s-line"></i>
                            FEATURE FILE</h3>


                                <h2>Blade Runner 2049</h2>

                                <div className="swiper-details">
                                    <p>2017</p>
                                    <div className="swiper-details-dot"></div>
                                    <p>2h 43m</p>
                                    <div className="swiper-details-dot"></div>
                                    <p>14</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa quibusdam. Tempora nihil sunt, illo totam officiis hic quae fugiat optio consectetur explicabo veritatis dignissimos error voluptas enim esse cum?</p>
                                <div className="swiper-btn">
                                    <button className='swiper-access-btn'><i className="ri-play-fill"></i> ACCESS FILE</button>
                                    <button className='swiper-list-btn'><i className="ri-add-line"></i> WATCH LIST</button>
                                </div>
                            </div>
                        </SwiperSlide> 
                        <div className="swiper-scrollbar"></div>
                        
                    </Swiper>

                    </div>
                </section>
            </div>
        </main>
        </>
    )
}

