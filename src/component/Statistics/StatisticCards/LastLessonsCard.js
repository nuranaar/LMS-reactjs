import React from 'react'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import './Card.scss'

export default class LastLessonsCard extends React.Component {
    state = {
        active: false
    }
    programmClickHandler = (e) => {
        console.log(e.target.dataset.target);
        this.setState({
            active: !this.state.active
        })
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="statistic-item statistic-card">
                    <div className="card-head">
                        <div className="card-title">Dünən keçirilən dərslər</div>
                    </div>
                    <div className="card-body">

                        <div onClick={this.programmClickHandler} className='programm'>
                            <p data-target='digital-marketing'>Digital Marketinq</p>
                            <Icon path={mdiMenuDown} size={1} className='mdi' />
                        </div>
                        <div className={['groups', this.state.active ? 'active' : null].join(' ')} id='digital-marketing' ></div>
                        <div onClick={this.programmClickHandler} className='programm'>
                            <p data-target='sis-admin'>Sistem Administratorluğu</p>
                            <Icon path={mdiMenuDown} size={1} className='mdi' />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
