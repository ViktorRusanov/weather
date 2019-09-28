import React from 'react';
import PropTypes from 'prop-types';
import {getIconUrl} from 'api';
import './WeatherWidget.scss';

export function WeatherWidget(props) {
    const {currentWeather = {}} = props;
    const {name, main = {}, wind = {}, weather = [{}]} = currentWeather;
    const {temp = '', pressure} = main;
    const {speed} = wind;
    const [{description, icon, main: mainWeather}] = weather;

    return (

        <div className="widget-weather">
            <table className="widget-weather__table">
                <tbody>
                <tr>
                    <td colSpan="4" className="widget-weather__cell">
                        <h3 className="widget-weather__city-name">{name}</h3>
                    </td>
                </tr>
                <tr>
                    <td rowSpan="3" className="widget-weather__cell">
                        <img src={getIconUrl(icon)} alt="icon"/>
                    </td>
                    <td rowSpan="4" className="widget-weather__cell">
                        <p className="widget-weather__temperature">{temp}&#8451;</p>
                    </td>
                </tr>
                <tr>
                    <td className="widget-weather__cell">
                        <p className="widget-weather__general-info">Wind</p>
                    </td>
                    <td className="widget-weather__cell">
                        <p className="widget-weather__general-info">{speed} m/s</p>
                    </td>
                </tr>
                <tr>
                    <td className="widget-weather__cell">
                        <p className="widget-weather__general-info">Cloudiness</p>
                    </td>
                    <td className="widget-weather__cell">
                        <p className="widget-weather__general-info">{description}</p>
                    </td>
                </tr>
                <tr>
                    <td className="widget-weather__cell">
                        <p className="widget-weather__main">{mainWeather}</p>
                    </td>
                    <td className="widget-weather__cell">
                        <p className="widget-weather__general-info">Pressure</p>
                    </td>
                    <td className="widget-weather__cell">
                        <p className="widget-weather__general-info">{pressure} hpa</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

WeatherWidget.propTypes = {
    currentWeather: PropTypes.object.isRequired
};
