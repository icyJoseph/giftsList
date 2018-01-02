import React, { Component } from "react";
import { Button } from "react-bootstrap";
class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    this.setState({ gifts: [{ id: 1 }] });
  };

  render() {
    return (
      <div>
        <h2>Gifts</h2>
        <Button className="btn-add" onClick={() => this.addGift()}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
