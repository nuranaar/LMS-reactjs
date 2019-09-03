import React from 'react'

export default function InfoCard(props) {
    return (
        <div className="col-md-12 ">
            <div className="statistic-item statistic-info">
                <div className="row align-items-center">
                    <div className="col-7">
                        <div className="title">{props.title}</div>
                    </div>
                    <div className="col-5 ml">
                        <p className="main-info">{props.value}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
