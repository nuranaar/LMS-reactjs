import React, { Component } from 'react'
import Icon from '@mdi/react';

export default class Card extends Component {
    render() {
        return (
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" >
                <div className="card d-flex justify-content-start">
                    <div className="icon"><Icon className="mdi"
                        path={this.props.card.icon}
                        size={2.4} /></div>
                    <div className="card-desc">
                        <div className="title"><a href="#"> {this.props.card.title} </a></div>
                        <div className="info">{this.props.card.text}</div>
                    </div>
                </div>
            </div>
        )
    }
}
