import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {LocationItem} from './LocationItem';
import './FavouriteLocation.scss';

export function FavouriteLocations(props) {
    const {favouriteList, getWeatherByNameRequest, clearFavourites} = props;
    const isEmptyList = favouriteList.length === 0;

    return (
        <div className="container-cities">
            <h2 className="container-cities__header">Favourites locations</h2>
            {isEmptyList
                ? <h3>Selected locations will be displayed here</h3>
                : (
                    <Fragment>
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
                    </Fragment>
                )}
        </div>
    );
}

FavouriteLocations.propTypes = {
    favouriteList: PropTypes.array.isRequired,
    getWeatherByNameRequest: PropTypes.func,
    clearFavourites: PropTypes.func.isRequired
};
