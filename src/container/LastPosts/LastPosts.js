import React, { Component } from 'react'

export default class LastPosts extends Component {
    state = {
        posts: [
            {
                id:1,
                title: "Müəllimlər iclası",
                date: {
                    month: "Avg",
                    day: "25"
                },
                category: "Son xəbər",
                time: "15:00",
            },
            {
                id:2,
                title: "Müəllimlər iclası iclası iclası iclası",
                date: {
                    month: "Iyul",
                    day: "25"
                },
                category: "Iclas",
                time: "15:00",
            },
            {
                id:3,
                title: "Müəllimlər iclası",
                date: {
                    month: "Iyun",
                    day: "25"
                },
                category: "Son xəbər",
                time: "15:00",
            },
            {
                id:4,
                title: "Müəllimlər iclası",
                date: {
                    month: "Iyun",
                    day: "25"
                },
                category: "Son xəbər",
                time: "15:00",
            },
            {
                id:5,
                title: "Müəllimlər iclası",
                date: {
                    month: "Iyun",
                    day: "25"
                },
                category: "Son xəbər",
                time: "15:00",
            },
        ]
    }
    render() {
        return (
            <div className="blogs">
                <div className="blogs-header d-flex justify-content-between align-items-center">
                    <div className="head-title">Blog</div>
                    <button className="btn">Hamısını göstər</button>
                </div>
                <div className="blog-list">
                    <ul>
                        {this.state.posts.map(post => {
                            return (
                                <li key={post.id} className="blog-item d-flex justify-content-start align-items-center">
                                    <div className="blog-date">
                                        <div className="month">{post.date.month}</div>
                                        <div className="day">{post.date.day}</div>
                                    </div>
                                    <div className="blog">
                                        <div className="title"><a href="#">{post.title}</a></div>
                                        <div className="info">
                                            <span className="category">{post.category} </span> | <span className="time">{post.time}</span></div>
                                    </div>
                                </li>
                            )
                        })}
                       
                    </ul>
                    <div className="hidden"></div>
                </div>
            </div>
        )
    }
}
