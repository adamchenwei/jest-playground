import React, { Component } from 'react';

class MyChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      change: 'is here',
    };
  }

  asyncCallResult() {
    // axios('').then((data) => {
    //   console.log(data);
    // })
  }

  render() {
    return (
      <div className="MyChildComponent">
        <p>{this.state.change}</p>
      </div>
    );
  }
}

export default App;
