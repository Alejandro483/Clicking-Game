import React, { useState } from "react";
import cards from "./cards.json";
import PictureCard from "./components/PictureCard";
import './App.css';
import Wrapper from "./components/Wrapper";

class App extends Component {
  // SETTING STATE
  state = {
    cards,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    shuffle: "false"
  };
  clickPicture = id => {
    // PICTURES ARRAGED RAMDOMLY
    const shuffledArray = this.shuffledArray(cards);
    this.setState({cards: shuffledArray});
// GAME OVER IF THE USER CLICK ON AN IMAGE ALREADY CHOSEN
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message: "Game Over. Try again!", shuffle:"true"});
    } else {
      this.setState({ 
        clickedArray: this.state.clickedArray.concat[id],
        score: this.state.score + 1,
        message: "Correct!",
        shuffle: "false"
      });
    }
// SET TOP SCORE
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score});
    }

    }
    shuffleArray = (picturesArray) => {
      for (let i = picturesArray.lenght - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [picturesArray[i], picturesArray [j]] = [picturesArray[j], picturesArray [i]];
      }
      return picturesArray;
    }

render() {
  return(
<div className="App">
  <header className="App-header">
    <h1 className="App-title">Clicky Game</h1>
  </header>
<h3 className="App-Instructions">
  <strong>Click on  the images only once. If you click an image twice, you'll loose and the game restarts.</strong>
  <p className="score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
  <p className="message"><strong>{this.message}</strong></p>
</h3>
<Wrapper
pictures = {this.state.cards.map(picture => (
  <PictureCard
  id={picture.id}
  key={picture.id}
  name={picture.name}
  image={picture.image}
  />
))}
/>
</div>
  );
 }
}

export default App;