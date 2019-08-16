import React from 'react'
import Rol from './Rol/Rol';

export default class RolsSegmentation extends React.Component {
    state = {
        rols: ['teacher', 'student', 'manager', 'admin']
    }
    render() {

        return (
            <div id="segmentations">
                <div className="title">
                    İstifadəçi hesabını seçin
            </div>
                <div className="segments row text-center justify-content-center ">

                    {this.state.rols.map(rol => {
                        return <Rol title={rol} />;
                    })}
                </div>
            </div>
        )
    }
}