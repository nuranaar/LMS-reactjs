import React, { Component } from 'react'
import Icon from '@mdi/react';

export default class Card extends Component {
    render() {
        return (
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div class="card d-flex justify-content-start">
                    <div class="icon"><Icon class="mdi"
                        path={this.props.card.icon}
                        size={2.4} /></div>
                    <div class="card-desc">
                        <div class="title"><a href="#"> {this.props.card.title} </a></div>
                        <div class="info">{this.props.card.text}</div>
                    </div>
                </div>
            </div>
        )
    }
}
