import React from 'react';
import PropTypes from 'prop-types';
import {ForecastItem} from './ForecastItem';
import {getMiddleValues, preparedList} from '../utils';
import './ForecastWidget.scss';

export function ForecastWidget(props) {
    const {list = []} = props.forecast;
    const forecastList = getMiddleValues(preparedList(list));
    const sortedForecastList = forecastList
        .sort((a, b) =>
            new Date(a.dt_txt) - new Date(b.dt_txt));

    return (
        <div className="widget-forecast">
            <ul className="widget-forecast__list">
                {sortedForecastList.map(item => <ForecastItem item={item} key={item.dt}/>)}
            </ul>
        </div>
    );
}

ForecastWidget.propTypes = {
    forecast: PropTypes.object.isRequired
};
