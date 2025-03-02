import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Login = () => {

    const navigate = useNavigate()
    
    return (
        <div className='auth-form'>
            <div className="container">
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                        <img src={assets.heroImg2} alt="" />
                        <div className="text">
                            <span className="text-1">
                                Every new friend is a <br /> new adventure
                            </span>
                            <span className="text-2">Let's get connected</span>
                        </div>
                    </div>
                </div>
                <div className="forms">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Login</div>
                            <form action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-envelope" />
                                        <input type="text" placeholder="Enter your email" required="" />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock" />
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            required=""
                                        />
                                    </div>
                                    <div className="text">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                    <div className="button input-box">
                                        <input type="submit" defaultValue="Sumbit" />
                                    </div>
                                    <div className="text sign-up-text">
                                        Don't have an account? <label onClick={()=>navigate('/register')}>Sigup now</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
