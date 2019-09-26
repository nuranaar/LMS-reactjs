import React from 'react'
import logo from '../../../assets/img/code_logo.png'
import Icon from '@mdi/react';
import {mdiFacebook} from '@mdi/js'
import {mdiTwitter} from '@mdi/js'
import {mdiInstagram} from '@mdi/js'
import {mdiLinkedin} from '@mdi/js'

export default function Footer() {
    return (
        <footer>
        <div className="container">

            <div className="row align-items-center p-3">

                <div className="col-5 copywriter">
                    © 2015 - 2019. Code Academy — Bütün hüquqlar qorunur.
                </div>
                <div className="col-3">
                    <div className="logo">
                        <img className="CA-Copy" src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="col-4">
                    <ul className="link-list">
                        <li className="link-item"><a href="#"><Icon path={mdiFacebook} size={1} className='mdi'/></a></li>
                        <li className="link-item"><a href="#"><Icon path={mdiTwitter} size={1} className='mdi'/></a></li>
                        <li className="link-item"><a href="#"><Icon path={mdiInstagram} size={1} className='mdi'/></a></li>
                        <li className="link-item"><a href="#"><Icon path={mdiLinkedin} size={1} className='mdi'/></a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
    )
}
