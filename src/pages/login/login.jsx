import './login.css'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { MatrixRain } from '../../components/MatrixRain/MatrixRain'
import { AuthLogo } from '../../components/AuthLogo/AuthLogo'

export const Login = ()=>{
    
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('currentUserKey')){
            navigate('/')
        }
        
    },[])

    const [showPassword, setShowPassword] = useState(false)
    const [loginError, setLoginError] = useState(false)

    const { register, 
            handleSubmit, 
            formState: { errors }, 
            watch } = useForm();


    const onSubmit = (data)=>{
        
        const actualUser = JSON.parse(localStorage.getItem('users')).find(el=>{
            return el.email === data.email && el.password === data.password
        })

        if(actualUser){
            setShowPassword(false)
            localStorage.setItem('currentUser', JSON.stringify(actualUser))
            const currentKey = `${Math.round(Math.random()* 100000)}-${Math.round(Math.random()* 100000)}-${Math.round(Math.random()* 100000)}`
            localStorage.setItem('currentUserKey', currentKey)
            navigate('/')    
        }else{
            console.log('erro');
            setLoginError(true)
        }
        
        // JSON.parse(localStorage.getItem('users')).find(el=>{
        //     setShowPassword(false)
        //     if(el.email === data.email && el.password === data.password){
        //         setLoginError(true)
        //         localStorage.setItem('currentUser', JSON.stringify(el))
        //         const currentKey = `${Math.round(Math.random()* 100000)}-${Math.round(Math.random()* 100000)}-${Math.round(Math.random()* 100000)}`
        //         localStorage.setItem('currentUserKey', currentKey)
        //         navigate('/')
        //     }
        //     else{
        //         console.log('erro');
        //         setLoginError(true)
        //     }
 
        // })


        
         
        
    }

    
    return(
        <>
        <div className="auth-container">

            <MatrixRain />

            <div className="login-content">
                <AuthLogo />

                <h3>Entrar</h3>

                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>



                    <input type='text' placeholder="Email" className={errors?.email && 'input-error'} {...register('email', {required: true, 
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Digite um email válido"
                            }
                    })} />
                    {errors?.email?.type === 'required' && <p className="error-message">O campo email é obrigatório</p>}
                    {errors?.email?.type === 'pattern' && <p className="error-message">Digite um email válido</p>}


                    <div className="password-input-container">
                        <input type={`${showPassword?'text':'password'}`} placeholder="Senha" className={errors?.password && 'input-error'} {...register('password', {required: true, minLength: 7})} />

                        <button type='button' onClick={()=>setShowPassword(!showPassword)}><i className={`${showPassword?'ri-eye-line':'ri-eye-close-line'}`} ></i></button>
                    </div>
                        {errors?.password?.type === 'required' && <p className="error-message">O campo senha é obrigatório</p>}
                        {errors?.password?.type === 'minLength' && <p className="error-message">A senha deve ter pelo menos 7 caracteres</p>}
                        {loginError === true && <p className="error-message">Email ou senha inválidos</p>}



                    <button type="submit">entrar</button>
                        
                </form>
                <span className="login-link">Não possui uma conta? <Link to="/register">Cadastrar</Link></span>
            </div>

        </div>
        </>
    )   
}