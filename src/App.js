import React from 'react';
import {SearcherModule} from 'modules/SearchModule';
import {WidgetModule} from 'modules/WidgetModule';
import {FavouriteModule} from 'modules/FavouriteModule';
import {Menu} from 'components/Menu';
import {Footer} from 'components/Footer';
import './styles.scss';

function App() {
    return (
        <React.Fragment>
            <Menu/>
            <div className="container">
                <SearcherModule/>
                <WidgetModule/>
                <FavouriteModule/>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default App;
