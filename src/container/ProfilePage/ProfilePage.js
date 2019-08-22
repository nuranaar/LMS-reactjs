import React, { Component } from 'react'
import ProfileDatasRead from '../../component/ProfileDatasRead/ProfileDatasRead';

export default class ProfilePage extends Component {
    state = {
        rols: [{
            name: 'admin',
            datas: [
                {
                    id:1,
                    label: '',
                    data: ''
                },
                {
                    id:2,
                    label: '',
                    data: ''
                },
                {
                    id:3,
                    label: '',
                    data: ''
                },
                {
                    id:4,
                    label: '',
                    data: ''
                },

            ]
        }],
        currentRol: 'admin'

    }
    render() {
        let display = {
            display: "none"
        };
        return (
            <div className="page-body" id="student-profile">
                <div className="col-lg-12">
                    <div className="body" id="profile">
                        <div className="body-head d-flex justify-content-between">
                            <p className="title">Şəxsi məlumat</p>
                            <a className="btn btn-edit " href="#profile-edit"><img src="../img/menubar-icons/edit.png"
                                alt="" />Redaktə
                                et</a>
                        </div>
                        <div className="datas mt-6 pb-6">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="photo">
                                        <img className="user-photo" src="../img/users/user.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    {this.state.rols.filter(rol => rol.name === this.state.currentRol).map(rol => { return rol.datas.map(data => { return <ProfileDatasRead data={data} key={data.id} /> }) })}
                                    <div className="form-group">
                                        <p className="label">Ad</p>
                                        <p className="input">Gülsüm</p>
                                    </div>
                                    <div className="form-group">
                                        <p className="label">Soyad</p>
                                        <p className="input">Məmmədova</p>
                                    </div>
                                    <div className="form-group">
                                        <p className="label">Ata adı</p>
                                        <p className="input">Fizuli</p>
                                    </div>
                                    <div className="form-group">
                                        <p className="label">Doğum tarixi</p>
                                        <p className="input">13 avqust 1992</p>
                                    </div>
                                    <div className="form-group">
                                        <p className="label">Email</p>
                                        <p className="input">gulsumfm@code.edu.az</p>
                                    </div>
                                    <div className="form-group">
                                        <p className="label">Telefon nömrəsi</p>
                                        <p className="input">051-760-31-81</p>
                                    </div>

                                    <div className="form-group">
                                        <p className="label">Yaşadığı ünvan</p>
                                        <p className="input">Bakı şəh., Nərimanov ray., Heydər Əliyev pr. 76, mən. 19</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body" id="profile-edit" style={display}>
                        <div className="body-head d-flex justify-content-between">
                            <p className="title">Şəxsi məlumat</p>

                        </div>
                        <form className="datas mt-6 pb-6">
                            <div className="row">
                                <div className="col-lg-3 text-center">
                                    <label for="photo">
                                        <div className="photo">
                                            <img className="user-photo" src="../img/users/user.jpg" alt="" />
                                            <img className="change-label" src="../img/menubar-icons/change photo.png"
                                                alt="" />
                                        </div>
                                    </label>
                                    <input type="file" id="photo" style={display} />
                                    <a className="btn btn-del-photo" href="#">Profil şəklini sil</a>
                                </div>
                                <div className="col-lg-9">
                                    <div className="form-group">
                                        <label className="label">Ad</label>
                                        <input className="input input-error" value="Gülsüm" />
                                        <p className="error-message">
                                            Adinizi daxil edin.
                                        </p>
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Soyad</label>
                                        <input className="input" value="Məmmədova" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Ata adı</label>
                                        <input className="input" value="Fizuli" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Doğum tarixi</label>
                                        <input className="input" value="13 avqust 1992" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Email</label>
                                        <input className="input" disabled value="gulsumfm@code.edu.az" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Telefon nömrəsi</label>
                                        <div className="input phone-input">
                                            <select name="operator">
                                                <option value="050">050</option>
                                                <option value="051">051</option>
                                                <option value="055">055</option>
                                                <option value="070">070</option>
                                                <option value="077">077</option>
                                                <option value="012">012</option>
                                            </select>
                                            <input value="760-31-81" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Yaşadığı ünvan</label>
                                        <input className="input"
                                            value="Bakı şəh., Nərimanov ray., Heydər Əliyev pr. 76, mən. 19" />
                                    </div>
                                    <div className="form-btn">
                                        <button className="btn btn-cancel">Ləğv et</button>
                                        <button className="btn btn-send send-note" data-target="#send-note">Dəyişikliyi
                                            göndər</button>
                                        {/* <!-- menegerde ve aminde btn texti "yadda saxla", "send-note" popupi acilmadan, "thanks-popup" acilacaq--> */}

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
