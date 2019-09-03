import React from 'react'
import { Link } from 'react-router-dom'
import d from '../../assets/img/study/D.png'
import book from '../../assets/img/study/hardbound-book-variant.png'
import p from '../../assets/img/study/P.png'
import goal from '../../assets/img/study/goal.png';
import box from '../../assets/img/study/archive-black-box.png';
import prev from '../../assets/img/study/left.png'
import LessonsSegmentation from '../../component/LessonsSegmentation/LessonsSegmentation';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import LastPosts from '../LastPosts/LastPosts';
import PercentageChart from '../../component/StatisticCards/PercentageChart';
import InfoCard from '../../component/StatisticCards/InfoCard';


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
                        <div className="segments row text-center justify-content-center mt-6 ml-3 mr-3">
                            {this.state.rols.filter(rol => rol.name === this.state.currentRol).map(rol => { return rol.segments.map(segment => { return <LessonsSegmentation segment={segment} key={segment.id} /> }) })}

                        </div>
                    </section>
                    <section id="statistics">
                        <div className="row">

                            {/* <div>  {this.state.rols.filter(rol => rol.name === this.state.currentRol).map(rol => rol.groups.map(group => { return <p className="group">{group + rol.groups.length}</p> }))}    </div> */}
                            {this.state.rols.filter(rol => rol.name === this.state.currentRol).map(rol => {
                                return <div className="group-pagination col-md-12" key={rol.name}>
                                    <div className='prev' onClick={this.state.group_index === 0 ? null : this.prevGroup}> <Icon path={mdiChevronLeft} className={['mdi', this.state.group_index === 0 ? 'disabled' : null].join(' ')} size={1} /></div>
                                    <p className="group">{rol.groups[this.state.group_index]}</p>
                                    <div className='next' onClick={this.state.group_index === (rol.groups.length - 1) ? null : this.nextGroup}>  < Icon path={mdiChevronRight} className={['mdi', this.state.group_index === (rol.groups.length - 1) ? 'disabled' : null].join(' ')} size={1} /></div>
                                </div>

                            })}
                            <div className="col-md-8">
                                <div className="statistics-list row">
                                    <div className="col-md-6">
                                        <PercentageChart totalTitle='Ümumi dərs saatı' totalValue={300} doneTitle='Keçirilən dərs saatı' doneValue={210} chart='Keçirilən dərs saatı' />

                                        <InfoCard title='Davamiyyət' value='80%' />

                                    </div>
                                    <div className="col-md-6">
                                        <PercentageChart totalTitle='Verilən tapşırıq sayı' totalValue={34} doneTitle='Edilən tapşırıq sayı' doneValue={27} chart='Toplam tapşırıq balı' />

                                        <InfoCard title='Keçirilən layihə sayı' value='1/3' />
                                    </div>
                                </div>
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
