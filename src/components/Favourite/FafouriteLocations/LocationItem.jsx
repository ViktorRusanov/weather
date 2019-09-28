import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getIconUrl, getWeatherByNameRequest as defaultGetWeatherByNameRequest} from 'api';
import {getCurrentDayAndMonth} from 'utils/date-utils';

export class LocationItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        };

    }

    componentDidMount() {
        const {
            location,
            getWeatherByNameRequest = defaultGetWeatherByNameRequest
        } = this.props;
        getWeatherByNameRequest(location)
            .then(res => res.json())
            .then(weather => this.setState({weather}))
    }

    render() {
        const {name, main = {}, wind = {}, weather = [{}]} = this.state.weather;
        const {temp = '', pressure} = main;
        const {speed} = wind;
        const [{description, icon}] = weather;

        return (
            <li className="list-cities__item">
                <h4 className="list-cities__location-name">{name}</h4>
                <table className="list-cities__table">
                    <tbody>
                    <tr className="list-cities__row">
                        <td className="list-cities__cell" />
                        <td className="list-cities__cell">Temperature</td>
                        <td className="list-cities__cell-description">Cloudiness</td>
                        <td className="list-cities__cell">Wind</td>
                        <td className="list-cities__cell-pressure">Pressure</td>
                    </tr>
                    <tr className="list-cities__date">
                        <td className="list-cities__cell">{getCurrentDayAndMonth()}</td>
                        <td colSpan="4" className="list-cities__cell" />
                    </tr>
                    <tr className="list-cities__row">
                        <td className="list-cities__cell">
                            <img className="list-cities__icon" src={getIconUrl(icon)} alt="icon"/>
                        </td>
                        <td className="list-cities__cell">{temp}&#8451;</td>
                        <td className="list-cities__cell-description">{description}</td>
                        <td className="list-cities__cell">{speed} m/s</td>
                        <td className="list-cities__cell-pressure">{pressure} mhs</td>
                    </tr>
                    </tbody>
                </table>
            </li>
        );
    }
}

LocationItem.propTypes = {
    location: PropTypes.string.isRequired,
    getWeatherByNameRequest: PropTypes.func
};


