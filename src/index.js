import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
const API_KEY = 'AIzaSyCnaELaoOiLo_OlZd_6C7wETggvK7OYr3E';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }
  componentWillMount() {
    YTSearch({key: API_KEY, term: 'puppy'}, (videos) => {
      this.setState({videos});
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
