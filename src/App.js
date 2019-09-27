import React from 'react';
import {SearcherModule} from 'modules/SearchModule';
import {WidgetModule} from 'modules/WidgetModule';
import {FavouriteModule} from 'modules/FavouriteModule';
import './style.css';

function App() {
    return (
        <div className="container">
            <SearcherModule/>
            <WidgetModule />
            <FavouriteModule />
        </div>
    );
}

export default App;
