import React, { Component } from "react";
import "./BuisnessList.css";

import Buisness from "../Buisness/Buisness";

class BuisnessList extends Component {
  render() {
    return (
      <div className="BusinessList">
        <Buisness />
        <Buisness />
        <Buisness />
        <Buisness />
      </div>
    );
  }
}

export default BuisnessList;
