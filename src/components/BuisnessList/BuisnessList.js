import React, { Component } from "react";
import "./BuisnessList.css";

import Buisness from "../Buisness/Buisness";

class BuisnessList extends Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.buisnesses.map((buisness, index) => (
          <Buisness buisness={buisness} key={buisness.name + index} />
        ))}
      </div>
    );
  }
}

export default BuisnessList;
