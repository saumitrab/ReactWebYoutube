import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetail';
import _ from 'lodash';
const API_KEY = 'AIzaSyCnaELaoOiLo_OlZd_6C7wETggvK7OYr3E';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentWillMount() {
    this.videoSearch('dogs');
  }

  videoSearch(searchQuery){
    YTSearch({key: API_KEY, term: searchQuery}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

   const videoSearch = _.debounce((searchQuery) => {this.videoSearch(searchQuery)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelected={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
