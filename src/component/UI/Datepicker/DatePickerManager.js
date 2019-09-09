import React from 'react'
import DatePicker, { useState } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.scss';
import Icon from '@mdi/react';
import { mdiCalendarMonth } from '@mdi/js';
import { getYear } from 'date-fns/esm';
import { getMonth } from 'date-fns';
import { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru)

const years = [];
for (let i = 2019; i < getYear(new Date()) + 3; i++) {
    years.push(i);
}
export default class DatePickerManager extends React.Component {
    state = {
        startDate: '',
        endDate: '',
        start_select: false,
        years: years,
        months: [
            'Yanvar',
            'Fevral',
            'Mart',
            'Aprel',
            'May',
            'Iyun',
            'Iyul',
            'Avqust',
            'Sentyabr',
            'Oktyabr',
            'Noyabr',
            'Dekabr'
        ]
    };

    setStartDate = (date) => {
        this.setState({
            startDate: date,
            endDate: ''
        })
    }
    setEndDate = (date) => {
        this.setState({
            endDate: date
        })
    }
    delEndDate = () => {
        this.setState({
            endDate: ''
        })
    }

    DateChanged = (date, e) => {
        if (e.target.classList.contains("react-datepicker__today-button")) {
            this.setState({
                startDate: null,
                endDate: null
            });
            return;
        }
        if (e.target.classList.contains("react-datepicker__day--range-end")) {
            this.setState({
                endDate: ''
            });
            return;
        }

        (this.state.startDate === '' || (this.state.startDate !== '' && this.state.endDate !== '')) ? this.setStartDate(date) :
            (this.state.startDate > date) ? this.setStartDate(date) 
                : this.setEndDate(date);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id} className="calendar icon"><Icon path={mdiCalendarMonth} size={.7} className='mdi' />

                    <DatePicker
                        renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled
                        }) => (
                                <div>
                                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className='datepicker__navigation previous'>

                                    </button>

                                    <select
                                        value={this.state.months[getMonth(date)]}
                                        onChange={({ target: { value } }) =>
                                            changeMonth(this.state.months.indexOf(value))
                                        }
                                    >
                                        {this.state.months.map(option => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        value={getYear(date)}
                                        onChange={({ target: { value } }) => changeYear(value)}
                                    >
                                        {this.state.years.map(option => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>

                                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className='datepicker__navigation next'>
                                    </button>
                                </div>
                            )}


                        id={this.props.id}
                        selected={this.state.startDate}
                        onChange={this.DateChanged}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        dateFormat="MM/yyyy"
                        locale='ru'
                        // shouldCloseOnSelect={false}
                        todayButton="Intervalı sil"
                        minDate={new Date()}
                        showDisabledMonthNavigation

                    // inline
                    />
                </label>

            </div>

        )
    }
}
