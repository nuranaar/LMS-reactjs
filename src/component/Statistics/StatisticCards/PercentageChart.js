import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default class PercentageChart extends React.Component {
    state = {
        data: {
            datasets: [{
                data: [this.props.doneValue, (this.props.totalValue - this.props.doneValue)],
                borderColor: [
                    '#0290ff',
                    '#e8e8e8'
                ],
                borderWidth: 5,
                weight: 0,
            }]

        }
    }
    render() {
        let percent = Math.round((this.props.doneValue * 100) / this.props.totalValue);
        return (
            <div className="col-12 ">
                <div className="statistic-item statistic-chart">
                    <div className="row align-items-center">
                        <div className="col-9">
                            <div className="title">{this.props.totalTitle}</div>
                            <p className="info">{this.props.totalValue}</p>
                            <div className="title mt-5 mb-1">{this.props.doneTitle}</div>
                            <p className="info">{this.props.doneValue}</p>
                        </div>
                        <div className="col-3 text-center">
                            <div className="chart" >
                                <Doughnut
                                    width={100}
                                    height={100}
                                    data={this.state.data}
                                    options={{ maintainAspectRatio: false }} />
                                <p className='percent'>{percent}%</p>
                            </div>
                            <p className="chart-info">{this.props.chart}</p>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}