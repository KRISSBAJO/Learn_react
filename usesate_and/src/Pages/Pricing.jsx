import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="pricing-container">
            <h2>Our Pricing Plans</h2>
            <div className="plans">
                <div className="plan">
                    <h3>Basic Plan</h3>
                    <p>$10/month</p>
                    <ul>
                        <li>Basic</li>
                        <li>20Hrs</li>
                        <li>All night</li>
                        <li>Ads</li>
                    </ul>
                    <button>Choose Plan</button>
                </div>
                <div className="plan">
                    <h3>Premium Plan</h3>
                    <p>$20/month</p>
                    <ul>
                        <li>Unlimited</li>
                        <li>Add Family</li>
                        <li>Bonus Tracks</li>
                        <li>No Ads</li>
                    </ul>
                    <button>Choose Plan</button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
