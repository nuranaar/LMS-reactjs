import React from 'react'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import './Card.scss'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default class LastLessonsCard extends React.Component {
    render() {
        return (
            <div className="col-12">
                <div className="statistic-item statistic-card">
                    <div className="card-head">
                        <div className="card-title">Dünən keçirilən dərslər</div>
                    </div>
                    <div className="card-body">
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className='programm'>
                                            <p data-target='digital-marketing'>Digital Marketinq</p>
                                            <Icon path={mdiMenuDown} size={1} className='mdi' />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <ul className='groups'>
                                        <li className='group'>
                                            V105
                                        </li>
                                        <li className='group'>
                                            P404
                                        </li>
                                        <li className='group'>
                                            I105
                                        </li>
                                        <li className='group'>
                                            DV105
                                        </li>
                                        <li className='group'>
                                            DV105
                                        </li>
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className='programm'>
                                            <p data-target='digital-marketing'>Qrafik və Veb dizayn</p>
                                            <Icon path={mdiMenuDown} size={1} className='mdi' />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <ul className='groups'>
                                        <li className='group'>
                                            V105
                                        </li>
                                        <li className='group'>
                                            P404
                                        </li>
                                        <li className='group'>
                                            I105
                                        </li>
                                        <li className='group'>
                                            DV105
                                        </li>
                                        <li className='group'>
                                            DV105
                                        </li>
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className='programm'>
                                            <p data-target='digital-marketing'>Proqramlaşdırma</p>
                                            <Icon path={mdiMenuDown} size={1} className='mdi' />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <ul className='groups'>
                                        <li className='group'>
                                            V105
                                        </li>
                                        <li className='group'>
                                            P404
                                        </li>
                                        <li className='group'>
                                            I105
                                        </li>
                                        <li className='group'>
                                            DV105
                                        </li>
                                        <li className='group'>
                                            DV105
                                        </li>
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className='programm'>
                                            <p data-target='sis-admin'>Sistem Administratorluğu</p>
                                            <Icon path={mdiMenuDown} size={1} className='mdi' />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className='groups'>
                                        <li className='group'>
                                            V105
                                        </li>
                                        <li className='group'>
                                            P404
                                        </li>
                                        <li className='group'>
                                            I105
                                        </li>
                                    </div>

                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className='programm'>
                                            <p data-target='digital-marketing'>İngilis dili</p>
                                            <Icon path={mdiMenuDown} size={1} className='mdi' />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <ul className='groups'>
                                        <li className='group'>
                                            V105
                                        </li>
                                        <li className='group'>
                                            P404
                                        </li>
                                        <li className='group'>
                                            I105
                                        </li>
                                        <li className='group'>
                                            DV105
                                        </li>
                                        <li className='group'>
                                            DV105
                                        </li>
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }
}
