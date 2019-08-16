import React from 'react'
import thanks from '../../assets/img/loginimg/thanks image.jpg'
import Button from '../UI/Button/Button';
export default function Thanks() {
    return (
        <div id="thanks">
            <div className="thanks text-center">
                <img src={thanks} alt="thanks" />
                <h5 className="title">Təşəkkür edirik!</h5>
                <p className="info">Sorğunuzla bağlı sizə məlumat gələcək</p>
                <Button class="btn enter">Hesaba keç</Button>
            </div>
        </div>
    )
}
