import React, { Component } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

class SearchBar extends Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map((option) => {
      let optionValue = sortByOptions[option];
      return <li key={optionValue}>{option}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>

        <div className="SearchBar-fields">
          <input placeholder="Search Buisnesses" />
          <input placeholder="Where?" />
        </div>

        <div className="SearchBar-submit">
          <a>Let's go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
