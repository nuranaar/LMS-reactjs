import React from 'react'

export default function ToDoCard(props) {
    return (
        <div className="col-md-12">
            <div className="statistic-item statistic-card">
                <div className="card-head">
                    <div className="card-title">Görüləcək işlər</div>
                    <div className="calendar icon"></div>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center">
                    <div className="card-info">{props.text}</div>
                </div>
            </div>
        </div>
    )
}
