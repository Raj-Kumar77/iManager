import React from 'react';
import './Plans.css'; // Assuming your CSS is in this file
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const plansData = [
  {
    id: 'basic',
    title: 'Basic',
    price: '0',
    pricePeriod: '/ month',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
    features: [
      { name: '2 links', disabled: false },
      { name: 'Own analytics platform', disabled: false },
      { name: 'Chat support', disabled: true },
      { name: 'Mobile application', disabled: true },
      { name: 'Unlimited users', disabled: true },
    ],
    buttonText: 'Subscribe',
    buttonClass: 'btnn',
    label: '',
  },
  {
    id: 'pro',
    title: 'Pro',
    price: '18',
    pricePeriod: '/ month',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    features: [
      { name: '2 links', disabled: false },
      { name: 'Own analytics platform', disabled: false },
      { name: 'Chat support', disabled: false },
      { name: 'Mobile application', disabled: true },
      { name: 'Unlimited users', disabled: true },
    ],
    buttonText: 'Subscribe',
    buttonClass: 'btnn button--pink',
    label: 'Best Value',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: "25",
    pricePeriod: '',
    description: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
    features: [
      { name: '2 links', disabled: false },
      { name: 'Own analytics platform', disabled: false },
      { name: 'Chat support', disabled: false },
      { name: 'Mobile application', disabled: false },
      { name: 'Unlimited users', disabled: false },
      { name: 'Customize Panel', disabled: false },
    ],
    buttonText: 'Subscribe',
    buttonClass: 'btnn button--white',
    label: '',
  },
];

const Plans = () => {
  const {selectedPlan, setSelectedPlan} = useAppContext()
  const navigate = useNavigate()

  const handleClick = (title,price) => {
    setSelectedPlan({
      plan: title,
      price: price
    })
    navigate('/register')
  }
  
  return (
    <section className="plans__container" id='pricing-plans'>
      <div className="plans">
      <div className="r-head flexColCenter">
          <span className="orangeText">Our Pricing</span>
          <span className="primaryText">Choose Your Plan</span>
        </div>
        <div className="planItem__container">
          {plansData.map((plan) => (
            <div key={plan.id} className={`planItem planItem--${plan.id}`}>
              <div className="card">
                <div className="card__header">
                  <div className={`card__icon symbol ${plan.id === 'pro' ? 'symbol--rounded' : ''}`}></div>
                  <h2>{plan.title}</h2>
                  {plan.label && <div className="card__label label">{plan.label}</div>}
                </div>
                <div className="card__desc">{plan.description}</div>
              </div>
              <br/>
              <div className="price">
                ${plan.price}
                {plan.pricePeriod && <span>{plan.pricePeriod}</span>}
              </div>
              <br/>
              <ul className="featureList">
                {plan.features.map((feature, index) => (
                  <li key={index} className={feature.disabled ? 'disabled' : ''}>
                    {feature.name}
                  </li>
                ))}
              </ul>

              <button className={plan.buttonClass} onClick={()=>handleClick(plan.title, plan.price)}>{plan.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
