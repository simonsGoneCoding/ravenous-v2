import React, { Component } from "react";
import "./BuisnessList.css";

import Buisness from "../Buisness/Buisness";

class BuisnessList extends Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.buisnesses.map((buisness) => (
          <Buisness buisness={buisness} key={buisness.id} />
        ))}
      </div>
    );
  }
}

export default BuisnessList;
