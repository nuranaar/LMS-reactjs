import React from 'react'
import PercentageChart from './StatisticCards/PercentageChart';
import MultiplyChart from './StatisticCards/MultiplyChart';
import ToDoCard from './StatisticCards/ToDoCard';
import DayTheme from './StatisticCards/DayTheme';

export default function TeacherStatistic() {
    return (
        <div className="statistics-list row">
            <div className="col-6">
                <PercentageChart totalTitle='Ümumi dərs saatı' totalValue={300} doneTitle='Keçirilən dərs saatı' doneValue={210} chart='Keçirilən dərs saatı' />
                <DayTheme theme='Adobe İllustrator' desc='Clipping Mask, Gradient, Paintool, Character, Character style, Paragraph, Paragraph style' />
            </div>
            <div className="col-6">
                <MultiplyChart />
                <ToDoCard text='Quiz imtahan keçiriləcək, Ev tapşırıqları yoxlansın' />
            </div>
        </div>
    )
}
