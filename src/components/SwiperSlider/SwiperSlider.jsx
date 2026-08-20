import runner from '../../assets/runnerbanner.png'
import tron from '../../assets/tronbanner.png'
import matrix from '../../assets/matrixbanner.png'
import { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, EffectFade, Parallax } from 'swiper/modules'
import './SwiperSlider.css'


import 'swiper/css/effect-fade'
import 'swiper/css/parallax'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import {Swiper, SwiperSlide} from 'swiper/react'

export const SwiperSlider = () => {

    const movieImages = {
        603: matrix,       // The Matrix
        335984: runner,    // Blade Runner 2049
        20526: tron        // Tron
    }

    const HandleSwiper = async ()=>{
        const api_key = '9c680d9feb4e5432fd539ae8ae31a071'
        const movieSwiperId = [603,335984,20526]
        const movieSwiper = movieSwiperId.map(async el=>{
            const url = `https://api.themoviedb.org/3/movie/${el}?api_key=${api_key}&language=pt-br`
            const response = await fetch(url)
            const data = await response.json()
            return data
        })
        return await Promise.all(movieSwiper)
    }

    const [swiperArr,setSwiperArr] = useState(null)
 
    useEffect( ()=>{
        const fetchSwiper = async ()=>{
            const Movies = await HandleSwiper()
            setSwiperArr(Movies)
        }
        fetchSwiper()

        

    },[])
   

    

    return(
        <>
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

            {swiperArr?.map(el=>{
                return(
                    <>
                    <SwiperSlide key={el.id}>
                <div className="swiper-slide-content">

                    <img src={movieImages[el.id]} alt={el.original_title} />
                    <div className="swiper-bg-gradient"></div>

                    <h3><i className="ri-arrow-right-s-line"></i>
                FEATURE FILE</h3>


                    <h2>{el.original_title}</h2>

                    <div className="swiper-details">
                        <p>{new Date(el.release_date).getFullYear()}</p>
                        <div className="swiper-details-dot"></div>
                        <p>{`${Math.floor(el.runtime / 60)}h ${el.runtime - (Math.floor(el.runtime / 60) * 60)}m`}</p> 
                    </div>
                    <p>{el.overview}</p>
                    <div className="swiper-btn">
                        <button className='swiper-access-btn'><i className="ri-play-fill"></i> ACCESS FILE</button>
                        <button className='swiper-list-btn'><i className="ri-add-line"></i> WATCH LIST</button>
                    </div>
                </div>
            </SwiperSlide> 
                    </>
                )
            })}
            {/* <SwiperSlide>
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
            </SwiperSlide>  */}
            <div className="swiper-scrollbar"></div>
            
        </Swiper>
        </>
    )

}