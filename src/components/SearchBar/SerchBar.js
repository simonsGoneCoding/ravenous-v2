import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    }
    return "";
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange = (e) => {
    this.setState({ term: e.target.value });
  };

  handleLocationChange = (e) => {
    this.setState({ location: e.target.value });
  };

  handleSearch = (e) => {
    const { term, location, sortBy } = this.state;
    this.props.searchYelp(term, location, sortBy);
    e.preventDefault();
  };

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((option) => {
      let optionValue = this.sortByOptions[option];
      return (
        <li
          key={optionValue}
          className={this.getSortByClass(optionValue)}
          onClick={() => this.handleSortByChange(optionValue)}
        >
          {option}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>

        <div className="SearchBar-fields">
          <input
            placeholder="Search Buisnesses"
            onChange={this.handleTermChange}
          />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>

        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
