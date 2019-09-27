import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Searcher,
    getWeatherByCoordinates,
    getSearchLocation,
    getWeatherByName,
    setSearchLocation
} from 'components/Searcher';
import {AddFavourite, ModalAddFavourite, addFavouriteLocation} from 'components/Favourite';
import {getForecastByName, getForecastByCoordinates} from 'components/Widgets';
import './SearchModule.scss';

class SearcherModuleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: false
        };
    }

    toggleModal = () => {
        this.setState({isShowModal: !this.state.isShowModal})
    };

    componentDidMount() {
        const preparedCoordinates = (pos) => {
            const crd = pos.coords;
            const {latitude, longitude} = crd;
            console.log({lat: latitude, lon: longitude});
            debugger
            this.props.getWeatherByCoordinates({lat: latitude, lon: longitude});
            this.props.getForecastByCoordinates({lat: latitude, lon: longitude});
        };
        navigator.geolocation.getCurrentPosition(preparedCoordinates);
    }

    render() {
        const {isShowModal} = this.state;
        const {
            searchLocation,
            setSearchLocation,
            getWeatherByName,
            addFavoriteLocation,
            getForecastByName
        } = this.props;

        return (
            <div className="row-search">
                <div className="column-search">
                    <Searcher
                        searchLocation={searchLocation}
                        getWeatherByName={getWeatherByName}
                        setSearchLocation={setSearchLocation}
                        getForecastByName={getForecastByName}
                    />
                </div>
                <div className="column-favourite">
                    <AddFavourite toggleModal={this.toggleModal} />
                </div>
                <ModalAddFavourite
                    isShowModal={isShowModal}
                    toggleModal={this.toggleModal}
                    addFavoriteLocation={addFavoriteLocation}
                />
            </div>
        );
    }
}

export const SearcherModule = connect(state => ({
    searchLocation: getSearchLocation(state),
}), {
    getWeatherByCoordinates,
    getForecastByCoordinates,
    getWeatherByName,
    getForecastByName,
    setSearchLocation,
    addFavoriteLocation: addFavouriteLocation
})(SearcherModuleContainer);