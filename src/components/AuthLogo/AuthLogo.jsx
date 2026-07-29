import './AuthLogo.css'
import logo from '../../assets/logo.png'

export const AuthLogo = ()=>{
    return(
        <div className="auth-logo">
            <img src={logo} alt="Logo" />
            <h1>Film Vault</h1>
        </div>
    )
}