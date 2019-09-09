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
export default class DatePickerTeacher extends React.Component {
    constructor(props) {
        super(props);
        this.myref = React.createRef();
    }

    state = {
        startDate: new Date(),
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

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    setStartDate = (date) => {
        this.setState({
            startDate: date
        })
    };
    clickOutside = () => {
        console.log(this.myref.current);
        // this.refs.picker.cancelFocusInput();
        this.myref.current.setOpen(true);
        // console.log("kjk");
    }

    render() {
        let date = this.state.startDate.toLocaleDateString();
        let selDay = date.replace(date.slice(6, date.length), date.slice(8, date.length))
        return (
            <div>
                <label htmlFor={this.props.id} className="calendar icon">
                    {selDay}
                    <Icon path={mdiCalendarMonth} size={.7} className='mdi' />

                    <DatePicker
                        ref={this.myref}
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
                                        }                                    >
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
                        onChange={date => {this.setStartDate(date); this.clickOutside(); }}
                        // onSelect={() => this.clickOutside()}
                        startDate={this.state.startDate}
                        selectsStart
                        dateFormat="MM/yyyy"
                        locale='ru'
                        todayButton="Bugün"
                        // shouldCloseOnSelect={true}

                    // minDate={new Date()}
                    // showDisabledMonthNavigation
                    // inline
                    />
                </label>

            </div>

        )
    }
}
