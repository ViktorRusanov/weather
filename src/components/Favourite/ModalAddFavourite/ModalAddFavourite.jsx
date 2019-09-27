import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Portal} from 'components/Portal';
import './ModalAddFavourite.scss';

export class ModalAddFavourite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }
    }

    clearLocation = () => this.setState({location: ''});

    onChange = (e) => {
        const {value} = e.target;
        this.setState({location: value});
    };

    closeModal = (e) => {
        if (e.target === e.currentTarget) {
            this.props.toggleModal();
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {location} = this.state;
        const {addFavoriteLocation} = this.props;
        if (location) {
            addFavoriteLocation(location);
            this.clearLocation();
            this.closeModal(e);
        }
    };

    render() {
        const {location} = this.state;
        const {isShowModal} = this.props;

        return (
            <Portal>
                {isShowModal &&
                <div className="modal-container" onClick={this.closeModal}>
                    <form className="modal-container__card" onSubmit={this.onSubmit}>
                        <div className="modal-container__close_button">
                            <i className="fa fa-times" onClick={this.closeModal}/>
                        </div>
                        <input
                            className="modal-container__input"
                            type="text"
                            placeholder="Favourite city..."
                            onChange={this.onChange}
                            value={location}
                        />
                        <button className="modal-container__button modal-container__button--hover" type="submit">
                            <i className="fa fa-angle-right"/>
                        </button>
                    </form>
                </div>}
            </Portal>
        );
    }
}

ModalAddFavourite.propTypes = {
    isShowModal: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    addFavoriteLocation: PropTypes.func.isRequired
};
