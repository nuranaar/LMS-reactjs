import React from 'react'
import WelcomeHeader from '../../container/WelcomeHeader/WelcomeHeader';
import Footer from './Footer/Footer';
import gradient from '../../assets/img/loginimg/gradient.jpg';
import WelcomeBody from '../../container/WelcomeBody/WelcomeBody';

export default function WelcomePages() {
    return (
        <div>
            <img className="header-gradient" src={gradient} alt="gradient" />
            <WelcomeHeader />
            <WelcomeBody />
            <Footer />
        </div>
    )
}
