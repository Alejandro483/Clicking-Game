import React from "react";
import ImageBlock from "../ImageBlock";

const ImageBlockListing = (props) => (
	<div className="container">
		<div className="row">
	    {props.cards.map((cards, index) => {
	      return <ImageBlock key={index} cards={cards} alt={cards} clickHandler={props.clickHandler} gameStatus={props.gameStatus} />
	    })}
	  </div>
  </div>
);

export default ImageBlockListing;