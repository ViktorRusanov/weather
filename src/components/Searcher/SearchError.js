import React from 'react';
import PropTypes from 'prop-types';
import './SearchError.scss';

export function SearchError(props) {
    const {searchLocation, error} = props;

    if (!error) return null;

    return (
        <div className="search-error">
            <h4>Sorry, unable to load the weather for {searchLocation}</h4>
        </div>
    );
}

SearchError.propTypes = {
    searchLocation: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired
};