import './WarningAdvise.css';
import { WarningContext } from '../../context/WarningContext';
import { useContext, useEffect } from 'react';

export const WarningAdvise = ({content})=>{

    const {warningBool,setWarningBool} = useContext(WarningContext)

    

    useEffect(()=>{
        if(warningBool){
            setTimeout(() => {
                setWarningBool(false)

            }, 2000);
        }
    },[warningBool])

    return(
        <div className={`warning-advise ${warningBool?'warning-show':''}`}>
            <p>{content}</p>
        </div>
    )
}