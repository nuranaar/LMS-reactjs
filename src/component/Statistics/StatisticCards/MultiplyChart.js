import React, { Component } from 'react'
import { Doughnut, Pie } from 'react-chartjs-2';

export default class MultiplyChart extends Component {
    state = {
        data: {
            datasets: [{
                data: [2, 2, 2, 2, 2],
                borderColor: '#fff',
                backgroundColor: [
                    '#0286cd',
                    '#00a659',
                    '#f0812b',
                    '#873996',
                    '#e9584f'
                ],
                hoverBackgroundColor: [
                    '#0286cd',
                    '#00a659',
                    '#f0812b',
                    '#873996',
                    '#e9584f'
                ],
                hoverBorderColor: '#fff',
                borderWidth: 2,
            }]
        },
        options: {
            cutoutPercentage: 78,
            responsive: false,
            tooltips: {
                enabled: false
            },

        }
    }
    render() {
        return (
            <div className="col-md-12 ">
                <div className="statistic-item statistic-status">
                    <div className="row align-items-center">
                        <div className="col-7">
                            <ul className="status-list">
                                <li className="status">
                                    <div className="title">
                                        <div className="dot" style={{ backgroundColor: '#0286cd' }}>
                                        </div> Əjdaha tələbələr
                                          </div>
                                    <span className="sum">2</span>
                                </li>
                                <li className="status">
                                    <div className="title">
                                        <div className="dot" style={{ backgroundColor: '#00a659' }}>
                                        </div> Aktiv tələbələr
                                          </div>
                                    <span className="sum">2</span>
                                </li>
                                <li className="status">
                                    <div className="title">
                                        <div className="dot" style={{ backgroundColor: '#f0812b' }}>
                                        </div>
                                        Yüksələn tələbələr
                                          </div>
                                    <span className="sum">2</span>
                                </li>
                                <li className="status">
                                    <div className="title">
                                        <div className="dot" style={{ backgroundColor: '#873996' }}>
                                        </div> Zəif tələbələr
                                          </div>
                                    <span className="sum">2</span>
                                </li>
                                <li className="status">
                                    <div className="title">
                                        <div className="dot" style={{ backgroundColor: '#e9584f' }}>
                                        </div>
                                        Geriləyən tələbələr
                                          </div>
                                    <span className="sum">2</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-5 ml">
                            <div className="chart multiply-chart" >
                                <Pie
                                    width={110}
                                    height={110}
                                    data={this.state.data}
                                    options={this.state.options}

                                />
                                <p className='percent'>10</p>
                            </div>

                            <p className="chart-info">Toplam tələbə sayı</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
