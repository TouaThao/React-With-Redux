import React, { Component } from 'react';

class Snack extends Component {
  render() {

    return (
      <div>
        <li> Name: {this.props.SnackData.person} and They give {this.props.SnackData.snack} Out</li>
      </div>
    );
  }
}

export default Snack;