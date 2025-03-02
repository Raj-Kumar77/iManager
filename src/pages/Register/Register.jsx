import React, { useEffect, useState } from 'react'
import './Register.css'
import { useAppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {

    const { selectedPlan, backendUrl } = useAppContext()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [subscription, setSubscription] = useState(selectedPlan.subscriptionType.toUpperCase())
    const [subscriptionPrice, setSubscriptionPrice] = useState(selectedPlan.subscriptionPrice)

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
        document.body.removeChild(script);
        };
    }, []);

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault()

        try {


            const response = await axios.post(backendUrl + `/api/v1/org/registration?amount=${subscriptionPrice}&currency=INR`, { name, email, password, subscription })

            const order = response.data

            if (!order.id) {
                toast.error("Error: no Order Id")
                return;
            }

            const paymentDescription = `Subscription Plan: ${subscription}`;

            //Initiate Razorpay Order
            const options = {
                key: "rzp_test_M5M2X3c0ahOpJl", // Replace with your Razorpay API Key
                amount: order.amount,
                currency: order.currency,
                name: "iManager",
                description: paymentDescription,
                order_id: order.id,
                handler: function (response) {
                    toast.success(`Payment Successful for ${subscription}! Payment ID: ${response.razorpay_payment_id}`);
                    navigate("/");
                },
                theme: {
                    color: "#3399cc"
                },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.log("Error: " + error);
            alert("Payment Initiation failed");
        }
    }



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
                            <form action="#" onSubmit={handleRegistrationSubmit}>
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-user" />
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required="" />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-envelope" />
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required="" />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock" />
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            required=""
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock" />
                                        <input
                                            type="text"
                                            placeholder="Enter your plan"
                                            required=""
                                            value={subscription}
                                            disabled
                                        />
                                    </div>
                                    <div style={{ fontSize: "13px" }}>Selected Plan - INR {selectedPlan.subscriptionPrice}</div>

                                    <div className="button input-box">
                                        <input type="submit" defaultValue="Sumbit" />
                                    </div>
                                    <div className="text sign-up-text">
                                        Already have an account? <label onClick={() => navigate('/login')}>Login now</label>
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
