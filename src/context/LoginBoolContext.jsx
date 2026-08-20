import { createContext,useState } from "react";

export const LoginBoolContext = createContext()

export const LoginBoolProvider = ({children})=>{

    const [loginBool,setLoginBool] = useState(false)

    return(
        <LoginBoolContext.Provider value={{loginBool,setLoginBool}}>
            {children}
        </LoginBoolContext.Provider>
    )
}