import React from 'react'
import DatePickerTeacher from '../../UI/Datepicker/DatePickerTeacher';

export default function DayTheme(props) {
    return (
        <div className="col-12">
            <div className="statistic-item statistic-card">
                <div className="card-head">
                    <div className="card-title">Günün mövzusu</div>
                    <DatePickerTeacher id='Günün mövzusu' />
                </div>
                <div className="card-body">
                    <div className="title">{props.theme}</div>
                    <div className="card-info pt-2">{props.desc}</div>
                </div>
            </div>
        </div>
    )
}
