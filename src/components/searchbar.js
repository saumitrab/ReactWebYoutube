import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { searchQuery: '' };
  }

  render() {
    return (
        <div className="search-bar">
          <input
            value = {this.state.searchQuery}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
        );
  }

  onInputChange(searchQuery) {
    this.setState({ searchQuery });
    this.props.onSearchTermChange(searchQuery);
  }
}

export default SearchBar;
