import React from 'react';
import {connect} from 'react-redux';
import {FavouriteLocations, selectFavouriteList, clearFavourites} from 'components/Favourite';
import './FavouriteModule.scss';

function FavouriteModuleContainer(props) {
    const {favouriteList, clearFavourites} = props;

    return (
        <div className="row-favourite">
            <FavouriteLocations
                favouriteList={favouriteList}
                clearFavourites={clearFavourites}
            />
        </div>
    )
}

export const FavouriteModule = connect(state => ({
    favouriteList: selectFavouriteList(state)
}), {
    clearFavourites
})(FavouriteModuleContainer);
