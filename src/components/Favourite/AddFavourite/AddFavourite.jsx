import React from 'react';
import PropTypes from 'prop-types';
import './AddFavourite.scss';

export function AddFavourite(props) {
    const {toggleModal} = props;

    return (
        <div className="favorite-form">
            <button onClick={toggleModal} className="favorite-form__button favorite-form__button--hover">
                <i className="fa fa-plus" />
            </button>
            <div className="favorite-form-info">
                <h4 className="favorite-form-info__header">Add location</h4>
                <p className="favorite-form-info__text">Did you know you can add favourite locations?</p>
            </div>
        </div>
    );
}

AddFavourite.propTypes = {
    toggleModal: PropTypes.func.isRequired
};