import React from 'react'

export default class DataEdit extends React.Component {
    state = {
        values: ['055',
            '051',
            '050',
            '070',
            '077',
            '012']
    }
    render() {
        let faild = null;
        if (this.props.data.type === 'phone') {
            faild = <div className="form-group">
                <label htmlFor={this.props.data.type} className="label">{this.props.data.label}</label>
                <div className="input phone-input">
                    <select defaultValue={this.props.data.data.substr(0, 3)} name="operator">
                        {this.state.values.map(value => {
                            return <option key={value} defaultValue={value}>{value}</option>
                        })}
                    </select>
                    <input id={this.props.data.type} defaultValue={this.props.data.data.substr(4, this.props.data.data.lenght)} name={this.props.data.type} />
                </div>
            </div>;
        } else {
            let disabled = this.props.data.type === 'email' ||this.props.data.type === 'programm' ? true : false;
            faild = <div className="form-group">
                <label htmlFor={this.props.data.type} className="label">{this.props.data.label}</label>
                <input id={this.props.data.type} disabled={disabled} className="input " defaultValue={this.props.data.data} name={this.props.data.type} />
            </div>;
        }
        return (
            <React.Fragment>
                {faild}
                {/* <input className="input input-error" value="Gülsüm" />
                <p className="error-message">
                    Adinizi daxil edin. </p> */}
            </React.Fragment>
        )
    }
}
