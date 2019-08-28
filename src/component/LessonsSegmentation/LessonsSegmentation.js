import React from 'react'
import {Link} from 'react-router-dom'

export default function LessonsSegmentation(props) {
    console.log(props.rol)
    return (
        <section className="segmentations" id="segmentations">
            <div className="segments row text-center justify-content-center mt-6 ml-3 mr-3">
                    {/* {props.segments.map(seg => {
                        return<div className="col-lg-3 col-sm-4 col-xs-6">
                        <div className="segment">
                            <Link to={['lessons/',seg.route].join('')}>
                                <div className="icon ">
                                    <img src={seg.icon} alt="d" />
                                </div>
                            </Link>
                            <div className="segment-title">{seg.title}</div>
                        </div>
                    </div>
                    })} */}
                
            </div>
        </section>

    )
}
