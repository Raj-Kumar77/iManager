import React from 'react'
import './Register.css'
import { useAppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Register = () => {
    const {selectedPlan} = useAppContext()
    const navigate = useNavigate()
    return (
        <div className='auth-form'>
            <div className="container">
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                        <img src={assets.heroImg} alt="" />
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
                        <div className="signup-form">
                            <div className="title">Signup</div>
                            <form action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-user" />
                                        <input type="text" placeholder="Enter your name" required="" />
                                    </div>
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
                                    <div className="input-box">
                                        <i className="fas fa-lock" />
                                        <input
                                            type="text"
                                            placeholder="Enter your plan"
                                            required=""
                                            value={selectedPlan.plan}
                                            disabled
                                        />
                                    </div>
                                    <div style={{fontSize:"13px"}}>Selected Plan - ${selectedPlan.price}</div>
                                    
                                    <div className="button input-box">
                                        <input type="submit" defaultValue="Sumbit" />
                                    </div>
                                    <div className="text sign-up-text">
                                        Already have an account? <label onClick={()=>navigate('/login')}>Login now</label>
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

export default Register
