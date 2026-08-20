import { createContext, useState } from "react";

export const WarningContext = createContext()

export const WarningProvider = ({children})=>{

    const [warningBool,setWarningBool] = useState(false)

    return(
        <WarningContext.Provider value={{warningBool,setWarningBool}}>
            {children}
        </WarningContext.Provider>
    )
}