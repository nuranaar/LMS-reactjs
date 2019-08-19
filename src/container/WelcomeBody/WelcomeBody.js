import React, { Component } from 'react'
import Card from '../../component/WelcomePage/Card/Card';
import { mdiAccount,mdiAccountMultiple} from '@mdi/js';

export default class WelcomeBody extends Component {
    state = {
        rols: [{
            name: 'admin',
            cards: [
                {
                    id:1,
                    title: 'Profil',
                    icon: mdiAccount,
                    text: 'Profilinə daxil olaraq şəxsi məlumatlarına baxa bilərsən.'
                },
                {
                    id:2,
                    title: 'Profil',
                    icon: mdiAccount,
                    text: 'Profilinə daxil olaraq şəxsi məlumatlarına baxa bilərsən.'
                },
                {
                    id:3,
                    title: 'Dərslər',
                    icon: mdiAccountMultiple,
                    text: 'Dərslərin planı, davamiyyəti, quizlər, tapşırıqları və bitirmə layihələrini görmək üçün Dərslərə giriş et.'
                },
                {
                    id:4,
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
                    id:1,
                    title: 'Dərslər',
                    icon: mdiAccountMultiple,
                    text: 'Dərslərin planı, davamiyyəti, quizlər, tapşırıqları və bitirmə layihələrini görmək üçün Dərslərə giriş et.'
                },
                {
                    id:2,
                    title: 'Dərslər',
                    icon: mdiAccountMultiple,
                    text: 'Dərslərin planı, davamiyyəti, quizlər, tapşırıqları və bitirmə layihələrini görmək üçün Dərslərə giriş et.'
                },
                {
                    id:3,
                    title: 'Profil',
                    icon: mdiAccount,
                    text: 'Profilinə daxil olaraq şəxsi məlumatlarına baxa bilərsən.'
                },
                {
                    id:4,
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
                        {this.state.rols.filter(rol => rol.name === this.state.currentRol).map(rol => { return rol.cards.map(card => { return <Card card={card} key={card.id} /> }) })}
                    </div>
                </section>
            </main>
        )
    }
}
