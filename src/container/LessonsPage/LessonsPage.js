import React from 'react'
import { Link } from 'react-router-dom'
import d from '../../assets/img/study/D.png'
import book from '../../assets/img/study/hardbound-book-variant.png'
import p from '../../assets/img/study/P.png'
import goal from '../../assets/img/study/goal.png';
import box from '../../assets/img/study/archive-black-box.png';
import LessonsSegmentation from '../../component/LessonsSegmentation/LessonsSegmentation';

export default class LessonsPage extends React.Component {
    state = {
        rols: [{
            name: 'student',
            segments: [
                {
                    id:1,
                    title: 'Davamiyyət',
                    icon: d,
                    route: 'attendance'
                },
                {
                    id:2,
                    title: 'Tapşırıqlar',
                    icon: book,
                    route: 'tasks'
                },
                {
                    id:3,
                    title: 'Dərs planı',
                    icon: p,
                    route: 'plane'
                },
                {
                    id:4,
                    title: 'Proqressim',
                    icon: goal,
                    route: 'progress'
                },
                {
                    id:5,
                    title: 'Resurslar',
                    icon: box,
                    route: 'resurs'
                },
                
            ]
        }],
        currentRol: 'student'
    }
    render() {
        return (
            <div className="page-body" id="student-study">
                <div className="body">
                   
                    <LessonsSegmentation rol={this.state.rols.filter(rol=>rol.name===this.state.currentRol).rols}/>

                    <section id="statistics">
                        <div className="row">
                            <div className="group-pagination col-md-12">
                                <div className="prev disabled"><img src="/img/study/left.png" alt="" className="icon" /></div>
                                <p className="group">P404</p>
                                <div className="next"><img src="/img/study/right.png" alt="" className="icon" /></div>
                            </div>
                            <div className="col-md-8">
                                <div className="statistics-list row">
                                    <div className="col-md-6 ">
                                        <div className="statistic-item statistic-chart">
                                            <div className="row align-items-center">
                                                <div className="col-7">
                                                    <div className="title">Ümumi dərs saatı</div>
                                                    <p className="info">300</p>
                                                    <div className="title mt-5 mb-1">Keçirilən dərs saatı</div>
                                                    <p className="info">210</p>
                                                </div>
                                                <div className="col-5 ml">
                                                    <div className="chart"></div>
                                                    <p className="chart-info">Keçirilən dərs saatı</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="statistic-item statistic-chart">
                                            <div className="row align-items-center">
                                                <div className="col-7">
                                                    <div className="title">Verilən tapşırıq sayı</div>
                                                    <p className="info">34</p>
                                                    <div className="title mt-5 mb-1">Edilən tapşırıq sayı</div>
                                                    <p className="info">27</p>
                                                </div>
                                                <div className="col-5 ml">
                                                    <div className="chart"></div>
                                                    <p className="chart-info">Toplam tapşırıq balı</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="statistic-item statistic-info">
                                            <div className="row align-items-center">
                                                <div className="col-7">
                                                    <div className="title">Davamiyyət</div>
                                                </div>
                                                <div className="col-5 ml">
                                                    <p className="main-info">80%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="statistic-item statistic-info">
                                            <div className="row align-items-center">
                                                <div className="col-7">
                                                    <div className="title">Keçirilən layihə sayı</div>
                                                </div>
                                                <div className="col-5 ml">
                                                    <p className="main-info">1/3</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blogs">
                                    <div className="blogs-header d-flex justify-content-between align-items-center">
                                        <div className="head-title">Blog</div>
                                        <button className="btn">Hamısını göstər</button>
                                    </div>
                                    <div className="blog-list">
                                        <ul>
                                            <li className="blog-item d-flex justify-content-start align-items-center">
                                                <div className="blog-date">
                                                    <div className="month">AVQ</div>
                                                    <div className="day">25</div>
                                                </div>
                                                <div className="blog">
                                                    <div className="title"><a href="#"> Müəllimlər iclası</a></div>
                                                    <div className="info"><span className="category">Son xəbər </span> |
                                                    <span className="time">15:00</span></div>
                                                </div>
                                            </li>
                                            <li className="blog-item d-flex justify-content-start align-items-center">
                                                <div className="blog-date">
                                                    <div className="month">AVQ</div>
                                                    <div className="day">25</div>
                                                </div>
                                                <div className="blog">
                                                    <div className="title"><a href="#"> Müəllimlər iclası
                                                        jhsbdkvhbkhvbskdhfvbjsgfbv</a></div>
                                                    <div className="info"><span className="category">Son xəbər </span> |
                                                    <span className="time">15:00</span></div>
                                                </div>
                                            </li>
                                            <li className="blog-item d-flex justify-content-start align-items-center">
                                                <div className="blog-date">
                                                    <div className="month">AVQ</div>
                                                    <div className="day">25</div>
                                                </div>
                                                <div className="blog">
                                                    <div className="title"><a href="#"> Müəllimlər iclası</a></div>
                                                    <div className="info"><span className="category">Son xəbər </span> |
                                                    <span className="time">15:00</span></div>
                                                </div>
                                            </li>
                                            <li className="blog-item d-flex justify-content-start align-items-center">
                                                <div className="blog-date">
                                                    <div className="month">AVQ</div>
                                                    <div className="day">25</div>
                                                </div>
                                                <div className="blog">
                                                    <div className="title"><a href="#"> Müəllimlər iclası</a></div>
                                                    <div className="info"><span className="category">Son xəbər </span> |
                                                    <span className="time">15:00</span></div>
                                                </div>
                                            </li>
                                            <li className="blog-item d-flex justify-content-start align-items-center">
                                                <div className="blog-date">
                                                    <div className="month">AVQ</div>
                                                    <div className="day">25</div>
                                                </div>
                                                <div className="blog">
                                                    <div className="title"><a href="#"> Müəllimlər iclası</a></div>
                                                    <div className="info"><span className="category">Son xəbər </span> |
                                                    <span className="time">15:00</span></div>
                                                </div>
                                            </li>
                                            <li className="blog-item d-flex justify-content-start align-items-center">
                                                <div className="blog-date">
                                                    <div className="month">AVQ</div>
                                                    <div className="day">25</div>
                                                </div>
                                                <div className="blog">
                                                    <div className="title"><a href="#"> Müəllimlər iclası</a></div>
                                                    <div className="info"><span className="category">Son xəbər </span> |
                                                    <span className="time">15:00</span></div>
                                                </div>
                                            </li>
                                            <li className="blog-item d-flex justify-content-start align-items-center">
                                                <div className="blog-date">
                                                    <div className="month">AVQ</div>
                                                    <div className="day">25</div>
                                                </div>
                                                <div className="blog">
                                                    <div className="title"><a href="#"> Müəllimlər iclası</a></div>
                                                    <div className="info"><span className="category">Son xəbər </span> |
                                                    <span className="time">15:00</span></div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="hidden"></div>
                                    </div>
                                </div>
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
