import React from 'react';
import PropTypes from 'prop-types';
import {LocationItem} from './LocationItem';
import './FavouriteLocation.scss';

export function FavouriteLocations(props) {
    const {favouriteList, getWeatherByNameRequest, clearFavourites} = props;

    return (
        <div className="container-cities">
            <h2 className="container-cities__header">Favourite locations</h2>
            <ul className="list-cities">
                {favouriteList.map(location =>
                    <LocationItem
                        key={location}
                        location={location}
                        getWeatherByNameRequest={getWeatherByNameRequest}
                    />)
                }
            </ul>
            <button
                className="container-cities__button container-cities__button--hover"
                onClick={clearFavourites}
            >
                Clear favourites
            </button>
        </div>
    );
}

FavouriteLocations.propTypes = {
    favouriteList: PropTypes.array.isRequired,
    getWeatherByNameRequest: PropTypes.func,
    clearFavourites: PropTypes.string.isRequired
};
