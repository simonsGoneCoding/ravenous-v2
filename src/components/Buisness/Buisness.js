import React, { Component } from "react";
import "./Buisness.css";

class Buisness extends Component {
  render() {
    const {
      imageSrc,
      name,
      address,
      city,
      state,
      category,
      rating,
      reviewCount,
    } = this.props.buisness;

    return (
      <div className="Business">
        <div className="image-container">
          <img src={imageSrc} alt={name} />
        </div>
        <h2>{name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
          </div>
          <div className="Business-reviews">
            <h3>{category}</h3>
            <h3 className="rating">{rating}</h3>
            <p>{reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Buisness;
