import React from "react";
import "./Banner.css";

const Banner = () => (
  <div className="jumbotron jumbotron-fluid text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 offset-md-right-2">
          <h1>Clicking Game!</h1>
          <h4>Click on a card only once, if you click more than once you'll need to restart the game!</h4>
        </div>
    </div>
    </div>
  </div>
);

export default Banner;