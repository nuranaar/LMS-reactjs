import React from 'react'
import DatePicker, { useState } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.scss';
import Icon from '@mdi/react';
import { mdiCalendarMonth } from '@mdi/js';


export default class Datepicker extends React.Component {
    state = {
        startDate: new Date(),
        endDate: new Date(),
        start_select: false
    };

    handleChange = date => {
        this.setState({
            startDate: date,
            endDate: date
        });
    };
    setStartDate = (date) => {
        this.setState({
            startDate: date,
            start_select: true
        })
    }
    setEndDate = (date) => {
        this.setState({
            endDate: date,
            start_select: false
        })
    }
    render() {

        return (
            <div>
            <label htmlFor='date_picker' className="calendar icon"><Icon path={mdiCalendarMonth} size={.7} className='mdi' />

                <DatePicker
                id='date_picker'
                    selected={this.state.startDate}
                    onChange={date => (this.state.startDate > date) ? this.setStartDate(date) :
                        (this.state.endDate < date) ? this.setEndDate(date) :
                            (this.state.start_select) ? this.setEndDate(date) : this.setStartDate(date)
                    }
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    shouldCloseOnSelect={false}
                    // inline
                />
            </label>

            </div>

        )
    }
}
