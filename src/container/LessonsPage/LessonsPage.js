import React from 'react'

import LessonsSegmentation from '../../component/LessonsSegmentation/LessonsSegmentation';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight, mdiCalendarMultipleCheck, mdiPackage, mdiAccountCheck, mdiFileDocumentBoxMultiple, mdiFinance, mdiSchool, mdiTeach } from '@mdi/js';
import LastPosts from '../LastPosts/LastPosts';
import StudentStatistics from '../../component/Statistics/StudentStatistics';
import TeacherStatistic from '../../component/Statistics/TeacherStatistics';
import ManagerStatistic from '../../component/Statistics/ManagerStatistic';


export default class LessonsPage extends React.Component {
    state = {
        group_index: 0,
        rols: [{
            name: 'student',
            segments: [
                {
                    id: 1,
                    title: 'Davamiyyət',
                    icon: mdiAccountCheck,
                    route: 'attendance',
                    color: '#00a659'
                },
                {
                    id: 2,
                    title: 'Tapşırıqlar',
                    icon: mdiFileDocumentBoxMultiple,
                    route: 'tasks',
                    color: '#0286cd'
                },
                {
                    id: 3,
                    title: 'Dərs planı',
                    icon: mdiCalendarMultipleCheck,
                    route: 'plane',
                    color: '#f0812b'
                },
                {
                    id: 4,
                    title: 'Proqressim',
                    icon: mdiFinance,
                    route: 'progress',
                    color: '#ffc906'
                },
                {
                    id: 5,
                    title: 'Resurslar',
                    icon: mdiPackage,
                    route: 'resurs',
                    color: '#3a3a3a'
                },
            ],
            groups: [
                'P404',
                'I403',
                'V405'
            ]
        },
        {
            name: 'teacher',
            segments: [
                {
                    id: 1,
                    title: 'Davamiyyət',
                    icon: mdiAccountCheck,
                    route: 'attendance',
                    color: '#00a659'
                },
                {
                    id: 2,
                    title: 'Tapşırıqlar',
                    icon: mdiFileDocumentBoxMultiple,
                    route: 'tasks',
                    color: '#0286cd'
                },
                {
                    id: 3,
                    title: 'Dərs planı',
                    icon: mdiCalendarMultipleCheck,
                    route: 'plane',
                    color: '#f0812b'
                },
                {
                    id: 4,
                    title: 'Tələbələr',
                    icon: mdiSchool,
                    route: 'students',
                    color: '#ffc906'
                },
                {
                    id: 6,
                    title: 'Resurslar',
                    icon: mdiPackage,
                    route: 'resurs',
                    color: '#3a3a3a'
                },
            ],
            groups: [
                'P404',
                'I403',
                'V405'
            ]
        },
        {
            name: 'manager',
            segments: [
                {
                    id: 1,
                    title: 'Davamiyyət',
                    icon: mdiAccountCheck,
                    route: 'attendance',
                    color: '#00a659'
                },
                {
                    id: 2,
                    title: 'Tapşırıqlar',
                    icon: mdiFileDocumentBoxMultiple,
                    route: 'tasks',
                    color: '#0286cd'
                },
                {
                    id: 3,
                    title: 'Dərs planı',
                    icon: mdiCalendarMultipleCheck,
                    route: 'plane',
                    color: '#f0812b'
                },
                {
                    id: 4,
                    title: 'Tələbələr',
                    icon: mdiSchool,
                    route: 'students',
                    color: '#ffc906'
                },
                {
                    id: 5,
                    title: 'Müəllimlər',
                    icon: mdiTeach,
                    route: 'teachers',
                    color: '#4a90e2'
                },
                {
                    id: 6,
                    title: 'Resurslar',
                    icon: mdiPackage,
                    route: 'resurs',
                    color: '#3a3a3a'
                },
            ],
            groups: [
                'P404',
                'I403',
                'V405'
            ]
        }],
        currentRol: 'teacher'
    }
    prevGroup = () => {
        let index = this.state.group_index - 1;
        this.setState({
            group_index: index
        })
    }
    nextGroup = () => {
        let index = this.state.group_index + 1;
        this.setState({
            group_index: index
        })
    }
    render() {
        return (
            <div className="page-body" id="student-study">
                <div className="body">
                    <section className="segmentations" id="segmentations">
                        <div className="segments row text-center justify-content-around mt-6 ml-3 mr-3 flex-nowrap">
                            {this.state.rols.filter(rol => rol.name === this.state.currentRol).map(rol => { return rol.segments.map(segment => { return <LessonsSegmentation segment={segment} key={segment.id} /> }) })}
                        </div>
                    </section>
                    <section id="statistics">
                        <div className="row">
                            {this.state.rols.filter(rol => rol.name === this.state.currentRol).map(rol => {
                                if (rol.groups.length) {
                                    return <div className="group-pagination col-12" key={rol.name}>
                                        <div className='prev' onClick={this.state.group_index === 0 ? null : this.prevGroup}> <Icon path={mdiChevronLeft} className={['mdi', this.state.group_index === 0 ? 'disabled' : null].join(' ')} size={1} /></div>
                                        <p className="group">{rol.groups[this.state.group_index]}</p>
                                        <div className='next' onClick={this.state.group_index === (rol.groups.length - 1) ? null : this.nextGroup}>  <Icon path={mdiChevronRight} className={['mdi', this.state.group_index === (rol.groups.length - 1) ? 'disabled' : null].join(' ')} size={1} /></div>
                                    </div>
                                }
                            })}
                            <div className="col-8">
                                <StudentStatistics />
                                <TeacherStatistic />
                                <ManagerStatistic />
                            </div>
                            <div className="col-4">
                                <LastPosts />
                                <div className="notepad">
                                    <textarea name="" id=""
                                        placeholder="Xatırlamaq istədiyiniz qeydi bura yazın…"></textarea>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
