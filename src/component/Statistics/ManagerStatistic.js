import React from 'react'
import MultiplyChart from './StatisticCards/MultiplyChart';
import ToDoCard from './StatisticCards/ToDoCard';
import GroupsCard from './StatisticCards/GroupsCard';
import VacationsCard from './StatisticCards/VacationsCard';
import LastLessonsCard from './StatisticCards/LastLessonsCard';

export default function ManagerStatistic() {
    return (
        <div className="statistics-list row">
            <div className="col-md-6">
                <MultiplyChart />
                <GroupsCard title='Başlayacaq dərslər' />
                <LastLessonsCard/>
            </div>
            <div className="col-md-6">
                <ToDoCard text='Quiz imtahan keçiriləcək, Ev tapşırıqları yoxlansın' />
                <GroupsCard title='Bitəcək dərslər' />
                <VacationsCard title='Tətildə olan müəllimlər' />
            </div>
        </div>
    )
}
