import './dashboard.css'
import { SwiperSlider } from '../../components/SwiperSlider/SwiperSlider'
import { ArchiveCase } from '../../components/ArchiveCase/ArchiveCase'
import { Link } from 'react-router-dom'

export const Dashboard = ()=>{
    return(
        <>
        <div className="section-swiper">

        <SwiperSlider/>


        </div>

        <div className="section-archive">
            <div className="archive-top">
                <p><i className="ri-arrow-right-s-line"></i> VAULT ARCHIVE</p>
                <Link to={'/archive'} >VIEW ALL FILES <i className="ri-arrow-right-long-line"></i></Link>
            </div>
            <div className="archive-case-container">

                <ArchiveCase />

            </div>
        </div>
        </>
    )
} 