import './BackgroundBlur.css'
import { CardToggleContext } from '../../context/CardToggleContext'
import { useContext } from 'react'
import { FilterMenuContext } from '../../context/FilterMenuContext'

export const BackgroundBlur = ()=>{

    const {CardToggle, setCardToggle} = useContext(CardToggleContext)
    const {filterMenuBool, setFilterMenuBool} = useContext(FilterMenuContext)
    

    return(
        <>
        <div onClick={()=>{setCardToggle(false); setFilterMenuBool(false)}} className={`background-blur ${CardToggle || filterMenuBool ?'blur-active':''}`}></div>
        </>
    )
}