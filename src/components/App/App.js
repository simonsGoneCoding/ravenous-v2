import React, { Component } from "react";
// import  logo  from "../../logo.svg";
import "./App.css";

import BuisnessList from "../BuisnessList/BuisnessList";
import SearchBar from "../SearchBar/SerchBar";
import { Yelp } from "../../util/Yelp";

class App extends Component {
  state = { buisnesses: [] };

  searchYelp = (term, location, sortBy) => {
    // console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    Yelp.search(term, location, sortBy).then((buisnesses) =>
      this.setState({ buisnesses: buisnesses })
    );
  };

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BuisnessList buisnesses={this.state.buisnesses} />
      </div>
    );
  }
}

export default App;
