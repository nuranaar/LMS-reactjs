import React from 'react'
import DatePicker, { useState } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.scss';
import Icon from '@mdi/react';
import { mdiCalendarMonth } from '@mdi/js';
import { getYear } from 'date-fns/esm';
import { getMonth } from 'date-fns';
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru)

const years = [];
for (let i = 2019; i < getYear(new Date()) + 3; i++) {
    years.push(i);
}
const locale = {
    name: 'ko',
    weekdays: 'Bazarertəsi, Çərşənbəaxşamı, Çərşənbəaxşamı, Cümə, Cümə,Şənbə, Bazar'.split(', '),
    localize: {
        day: '1,2,3,4,5,6,7'.split(',')
    },
    formatLong: new Date()
};
export default class Datepicker extends React.Component {
    state = {
        startDate: new Date(),
        endDate: '',
        start_select: false,
        // years: getYear(new Date()),
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
                        renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled
                        }) => (
                                <div
                                // style={{
                                //     margin: 10,
                                //     display: "flex",
                                //     justifyContent: "center"
                                // }}
                                >
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


                        id='date_picker'
                        selected={this.state.startDate}
                        onChange={date => (this.state.startDate > date) ? this.setStartDate(date) :
                            (this.state.endDate < date) ? this.setEndDate(date) :
                                (this.state.start_select) ? this.setEndDate(date) : this.setStartDate(date)
                        }
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        dateFormat="MM/yyyy"
                        // locale={locale}
                        locale='ru'
                        // showMonthYearPicker
                        shouldCloseOnSelect={false}
                        todayButton="Bugün"
                        minDate={new Date()}
                        showDisabledMonthNavigation

                    // inline
                    />
                </label>
              
            </div>

        )
    }
}
