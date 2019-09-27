import React from 'react';
import PropTypes from 'prop-types';
import {getIconUrl} from 'api';
import {getDate, getDay} from 'utils/date-utils';

export function ForecastItem({item}) {
    const {main = {}, dt_txt, weather = [{}]} = item;
    const {temp} = main;
    const [{main: weatherMain, icon}] = weather;
    const day = getDay(dt_txt);
    const date = getDate(dt_txt);

    return (
        <li className="widget-forecast__item">
            <div className="widget-forecast__day">{day}</div>
            <div className="widget-forecast__temperature">{date}</div>
            <img className="widget-forecast__icon" src={getIconUrl(icon)} alt="icon"/>
            <div>{temp}&#8451;</div>
            <div>{weatherMain}</div>
        </li>
    );
}


ForecastItem.propTypes = {
    item: PropTypes.object.isRequired
};