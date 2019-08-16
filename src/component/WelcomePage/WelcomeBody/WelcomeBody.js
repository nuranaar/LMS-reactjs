import React, { Component } from 'react'
import Card from './Card/Card';
import { mdiAccount,mdiAccountMultiple} from '@mdi/js';

export default class WelcomeBody extends Component {
    state = {
        rols: [{
            name: 'admin',
            cards: [
                {
                    title: 'Profil',
                    icon: mdiAccount,
                    text: 'Profilinə daxil olaraq şəxsi məlumatlarına baxa bilərsən.'
                },
                {
                    title: 'Profil',
                    icon: mdiAccount,
                    text: 'Profilinə daxil olaraq şəxsi məlumatlarına baxa bilərsən.'
                },
                {
                    title: 'Dərslər',
                    icon: mdiAccountMultiple,
                    text: 'Dərslərin planı, davamiyyəti, quizlər, tapşırıqları və bitirmə layihələrini görmək üçün Dərslərə giriş et.'
                },
                {
                    title: 'Dərslər',
                    icon: mdiAccountMultiple,
                    text: 'Dərslərin planı, davamiyyəti, quizlər, tapşırıqları və bitirmə layihələrini görmək üçün Dərslərə giriş et.'
                },
                
            ]
        },
        {
            name: 'muellim',
            cards: [
                {
                    title: 'Dərslər',
                    icon: mdiAccountMultiple,
                    text: 'Dərslərin planı, davamiyyəti, quizlər, tapşırıqları və bitirmə layihələrini görmək üçün Dərslərə giriş et.'
                },
                {
                    title: 'Dərslər',
                    icon: mdiAccountMultiple,
                    text: 'Dərslərin planı, davamiyyəti, quizlər, tapşırıqları və bitirmə layihələrini görmək üçün Dərslərə giriş et.'
                },
                {
                    title: 'Profil',
                    icon: mdiAccount,
                    text: 'Profilinə daxil olaraq şəxsi məlumatlarına baxa bilərsən.'
                },
                {
                    title: 'Profil',
                    icon: mdiAccount,
                    text: 'Profilinə daxil olaraq şəxsi məlumatlarına baxa bilərsən.'
                },
            ]
        }],
        currentRol: 'admin'
    }

    render() {
        return (
            <main>
                <section className="container" id="menu">
                    <div className="menu-cards row">
                        {this.state.rols.filter(rol => rol.name === this.state.currentRol).map(rol => { return rol.cards.map(card => { return <Card card={card} /> }) })}
                    </div>
                </section>
            </main>
        )
    }
}
