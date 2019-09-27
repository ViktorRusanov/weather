import React from 'react';
import {connect} from 'react-redux';
import {
    WeatherWidget,
    ForecastWidget,
    selectWeather,
    selectForecast
} from 'components/Widgets';
import './WidgetModule.scss';

export function WidgetModuleContainer(props) {
    const {currentWeather, forecast} = props;

    return (
        <div className="row-widget">
            <div className="column-widget">
                <WeatherWidget currentWeather={currentWeather}/>
            </div>
            <div className="column-widget">
                <ForecastWidget forecast={forecast}/>
            </div>
        </div>
    )
}

export const WidgetModule = connect(state => ({
    currentWeather: selectWeather(state),
    forecast: selectForecast(state)
}))(WidgetModuleContainer);
