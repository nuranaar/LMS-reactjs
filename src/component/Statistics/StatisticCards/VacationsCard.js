import React from 'react'

export default function VacationsCard(props) {
    return (
        <div className="col-12">
            <div className="statistic-item statistic-card groups-date">
                <div className="card-head">
                    <div className="card-title">{props.title}</div>
                </div>
                <div className="card-body">
                    <ul className="card-list">
                        {/* <li className="card-item">
                            <p className="date">Hal-hazırda tətildə olan müəllim yoxdur</p>
                        </li> */}
                        <li className="card-item">
                            <p className="title">İsmayıl İsmayılov</p>
                            <p className="date">03.08.19 - 28.12.20</p>
                        </li>
                        <li className="card-item">
                            <p className="title">Kamran Abdullayev</p>
                            <p className="date">03.08.19 - 28.12.20</p>
                        </li>
                        <li className="card-item">
                            <p className="title">Rizvan Bağırlı</p>
                            <p className="date">03.08.19 - 28.12.20</p>
                        </li>
                        <li className="card-item">
                            <p className="title">Yolçu Nəsib</p>
                            <p className="date">03.08.19 - 28.12.20</p>
                        </li>
                        <li className="card-item">
                            <p className="title">Orxan Məmmədov</p>
                            <p className="date">03.08.19 - 28.12.20</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
