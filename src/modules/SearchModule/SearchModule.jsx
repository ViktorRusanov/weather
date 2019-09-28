import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {
    Searcher,
    SearchError,
    getWeatherByCoordinates,
    getSearchLocation,
    getWeatherByName,
    setSearchLocation
} from 'components/Searcher';
import {AddFavourite, ModalAddFavourite, addFavouritesLocation} from 'components/Favourite';
import {getForecastByName, getForecastByCoordinates, selectLoadError} from 'components/Widgets';
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
        const {
            getWeatherByCoordinates,
            getForecastByCoordinates,
            getWeatherByName,
            getForecastByName
        } = this.props;
        const preparedCoordinates = (pos) => {
            const crd = pos.coords;
            const {latitude, longitude} = crd;
            getWeatherByCoordinates({lat: latitude, lon: longitude});
            getForecastByCoordinates({lat: latitude, lon: longitude});
        };
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(preparedCoordinates);
        } else {
            const defaultLocation = 'London';
            getWeatherByName(defaultLocation);
            getForecastByName(defaultLocation);
        }

    }

    render() {
        const {isShowModal} = this.state;
        const {
            searchLocation,
            setSearchLocation,
            getWeatherByName,
            addFavoriteLocation,
            getForecastByName,
            error
        } = this.props;

        return (
            <Fragment>
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
                        <AddFavourite toggleModal={this.toggleModal}/>
                    </div>
                    <ModalAddFavourite
                        isShowModal={isShowModal}
                        toggleModal={this.toggleModal}
                        addFavoriteLocation={addFavoriteLocation}
                    />
                </div>
                <SearchError searchLocation={searchLocation} error={error}/>
            </Fragment>
        );
    }
}

export const SearcherModule = connect(state => ({
    searchLocation: getSearchLocation(state),
    error: selectLoadError(state)
}), {
    getWeatherByCoordinates,
    getForecastByCoordinates,
    getWeatherByName,
    getForecastByName,
    setSearchLocation,
    addFavoriteLocation: addFavouritesLocation
})(SearcherModuleContainer);