import React, { Component } from "react";
import { Button } from "react-bootstrap";
class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id);
    const max_id = ids.length > 0 ? Math.max(...ids) : 0;

    this.setState(prevState => ({
      gifts: [...prevState.gifts, { id: max_id + 1 }]
    }));
  };

  render() {
    const { gifts } = this.state;
    return (
      <div>
        <h2>Gifts</h2>
        <div className="gift-list">
          {gifts.map(gift => <div key={gift.id} />)}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
