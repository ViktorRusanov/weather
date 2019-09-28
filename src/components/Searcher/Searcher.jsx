import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Searcher.scss';

export class Searcher extends Component {
    handleChange = (e) => {
        const {value} = e.target;
        const {setSearchLocation} = this.props;
        setSearchLocation(value);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {
            searchLocation,
            getWeatherByName,
            getForecastByName
        } = this.props;
        getWeatherByName(searchLocation);
        getForecastByName(searchLocation);
    };

    render() {
        const {searchLocation} = this.props;
        return (
            <form className="search-form" onSubmit={this.onSubmit}>
                <input className="search-form__input" placeholder="Enter city" type="search"
                       onChange={this.handleChange} value={searchLocation}/>
                <button className="search-form__submit search-form__submit--hover" type="submit">
                    <i className="fa fa-search" />
                </button>
            </form>
        );
    }
}

Searcher.propTypes = {
    setSearchLocation: PropTypes.func.isRequired,
    getWeatherByName: PropTypes.func.isRequired,
    getForecastByName: PropTypes.func.isRequired,
    searchLocation: PropTypes.string.isRequired
};