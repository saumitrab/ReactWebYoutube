import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyCnaELaoOiLo_OlZd_6C7wETggvK7OYr3E';

const App = () => {
  return (<div>
      <SearchBar />
    </div>);
}


ReactDOM.render(<App />, document.querySelector('.container'));
