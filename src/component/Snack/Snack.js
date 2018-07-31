import React, { Component } from 'react';

class Snack extends Component {
  render() {

    return (
      <div>
        <p onClick={() =>this.props.showSnackList(this.props.name)}> {this.props.name} </p>
      </div>
    );
  }
}

export default Snack;