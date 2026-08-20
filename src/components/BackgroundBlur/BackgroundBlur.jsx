import './BackgroundBlur.css'
import { CardToggleContext } from '../../context/CardToggleContext'
import { useContext } from 'react'

export const BackgroundBlur = ()=>{

    const {CardToggle, setCardToggle} = useContext(CardToggleContext)

    return(
        <>
        <div onClick={()=>setCardToggle(false)} className={`background-blur ${CardToggle?'blur-active':''}`}></div>
        </>
    )
}