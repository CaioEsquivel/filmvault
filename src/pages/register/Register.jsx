import './Register.css'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthLogo } from '../../components/AuthLogo/AuthLogo'
import { MatrixRain } from '../../components/MatrixRain/MatrixRain'



export const Register = ()=>{

    useEffect(()=>{
        localStorage.removeItem('currentUserKey')
    },[])

    const [showPassword, setShowPassword] = useState(false)

    const { register, 
            handleSubmit, 
            formState: { errors }, 
            watch } = useForm();

    const navigate = useNavigate()

    const onSubmit = (data)=>{
        setShowPassword(false)
        const users = JSON.parse(localStorage.getItem('users')) || []
        users.push(data)
        localStorage.setItem(`users`, JSON.stringify(users))   
        navigate('/login')
    }


    

    return(
        <>
        <div className="auth-container">

            <MatrixRain />

            <div className="register-content">
                <AuthLogo />

                <h3>Registrar</h3>

                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder="Nome" className={errors?.name && 'input-error'} {...register('name', { required: true })} />
                    {errors?.name?.type === 'required' && <p className="error-message">O campo nome é obrigatório</p>}


                    <input type='email' placeholder="Email" className={errors?.email && 'input-error'} {...register('email', {required: true, 
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

                    <input type="password" placeholder="Confirmar Senha" className={errors?.confirmPassword && 'input-error'} {...register('confirmPassword', {required: true, validate: (value)=>value=== watch('password') || 'As senhas não coincidem'})} />
                    {errors?.confirmPassword?.type === 'required' && <p className="error-message">O campo confirme a senha é obrigatório</p>}
                    {errors?.confirmPassword?.type === 'validate' && <p className="error-message">As senhas não coincidem</p>}


                    <button type="submit">Cadastrar</button>
                        <div className="register-terms">
                            <input type="checkbox" id="terms" {...register('terms', {required: true})} />
                            <label htmlFor="terms" className={errors?.terms && 'term-error'}>Concordo com os termos e condições</label>
                        </div>
                </form>
                <span className="login-link">Já possui uma conta? <Link to="/login">Entrar</Link></span>
            </div>

        </div>
        </>
    )   
}