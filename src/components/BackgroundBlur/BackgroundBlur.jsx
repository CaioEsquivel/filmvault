import './BackgroundBlur.css'
import { CardToggleContext } from '../../context/CardToggleContext'
import { useContext } from 'react'
import { FilterMenuContext } from '../../context/FilterMenuContext'
import { AsidePopupContext } from '../../context/AsidePopupContext'
import { SearchPopupContext } from '../../context/SearchPopupContext'

export const BackgroundBlur = ()=>{

    const {CardToggle, setCardToggle} = useContext(CardToggleContext)
    const {filterMenuBool, setFilterMenuBool} = useContext(FilterMenuContext)
    const {asidePopup, setAsidePopup} = useContext(AsidePopupContext)
    const {searchPopup, setSearchPopup} = useContext(SearchPopupContext)
    

    return(
        <>
        <div onClick={()=>{setCardToggle(false); setFilterMenuBool(false); setAsidePopup(false); setSearchPopup(false)}} className={`background-blur ${CardToggle || filterMenuBool || asidePopup || searchPopup ?'blur-active':''}`}></div>
        </>
    )
}