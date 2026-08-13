import './dashboard.css'
import { SwiperSlider } from '../../components/SwiperSlider/SwiperSlider'
import { ArchiveCase } from '../../components/ArchiveCase/ArchiveCase'

export const Dashboard = ()=>{
    return(
        <>
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
        </>
    )
} 