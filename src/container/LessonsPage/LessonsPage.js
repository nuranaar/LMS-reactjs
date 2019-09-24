import React from 'react'
import d from '../../assets/img/study/D.png'
import book from '../../assets/img/study/hardbound-book-variant.png'
import p from '../../assets/img/study/P.png'
import goal from '../../assets/img/study/goal.png';
import box from '../../assets/img/study/archive-black-box.png';
import LessonsSegmentation from '../../component/LessonsSegmentation/LessonsSegmentation';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
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
                    icon: d,
                    route: 'attendance'
                },
                {
                    id: 2,
                    title: 'Tapşırıqlar',
                    icon: book,
                    route: 'tasks'
                },
                {
                    id: 3,
                    title: 'Dərs planı',
                    icon: p,
                    route: 'plane'
                },
                {
                    id: 4,
                    title: 'Proqressim',
                    icon: goal,
                    route: 'progress'
                },
                {
                    id: 5,
                    title: 'Resurslar',
                    icon: box,
                    route: 'resurs'
                },
            ],
            groups: [
                'P404',
                'I403',
                'V405'
            ]
        }],
        currentRol: 'student'
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
                        <div className="segments row text-center justify-content-around mt-6 ml-3 mr-3">
                            {this.state.rols.filter(rol => rol.name === this.state.currentRol).map(rol => { return rol.segments.map(segment => { return <LessonsSegmentation segment={segment} key={segment.id} /> }) })}
                        </div>
                    </section>
                    <section id="statistics">
                        <div className="row">
                            {this.state.rols.filter(rol => rol.name === this.state.currentRol).map(rol => {
                                if (rol.groups.length) {
                                    return <div className="group-pagination col-md-12" key={rol.name}>
                                        <div className='prev' onClick={this.state.group_index === 0 ? null : this.prevGroup}> <Icon path={mdiChevronLeft} className={['mdi', this.state.group_index === 0 ? 'disabled' : null].join(' ')} size={1} /></div>
                                        <p className="group">{rol.groups[this.state.group_index]}</p>
                                        <div className='next' onClick={this.state.group_index === (rol.groups.length - 1) ? null : this.nextGroup}>  <Icon path={mdiChevronRight} className={['mdi', this.state.group_index === (rol.groups.length - 1) ? 'disabled' : null].join(' ')} size={1} /></div>
                                    </div>
                                }
                            })}
                            <div className="col-md-8">
                                <StudentStatistics/>
                                <TeacherStatistic />
                                <ManagerStatistic />
                            </div>
                            <div className="col-md-4">
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
