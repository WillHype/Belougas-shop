import React, { useState } from 'react';
import './Newsletter.scss';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setError(''); // Efface le message d'erreur lorsque l'utilisateur modifie l'email
    };

    const handleSubscribe = () => {
        if (email.trim() !== '') {
            setSubscribed(true);
        } else {
            setError('Please enter your email.'); // Définit le message d'erreur
        }
    };

    return (
        <div className="newsletter">
            <h1>Get Exclusive offers on your Email</h1>
            <p>Subscribe to our newsletter and stay updated on New collections, deals & more</p>
            <div>
                <input
                    type="email"
                    placeholder='Enter your email'
                    value={email}
                    onChange={handleEmailChange}
                />
                <button onClick={handleSubscribe} className={subscribed ? 'subscribed' : ''}>
                    {subscribed ? 'Thank you. You have been subscribed' : 'Subscribe'}
                </button>
            </div>
            {error && <p className="error">{error}</p>}
            <p className="text">We won’t send you spam. Unsubscribe at any time.</p>
        </div>
    );
};

export default Newsletter;
