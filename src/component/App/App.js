import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

//componenet
import SnackList from '../SnackList/SnackList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSnack: {
        person: '',
        snack: ''
      }

    }
  }

  handleSnackChange = (propertyName) => (event) => {
    this.setState({
      newSnack: {
        ...this.state.newSnack,
        [propertyName]: event.target.value
      }
    })
  }


  render() {
    return (
      <div >
        <input type="text" placeholder="name" onChange={this.handleSnackChange('person')} />
        <input type="text" placeholder="Snack" onChange={this.handleSnackChange('snack')} />
        <button onClick={() => this.props.dispatch({ type: 'Add_Snack', payload: this.state.newSnack })}>Button</button>
        <SnackList />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return { SnackList: reduxState.snackReducer }
}


export default connect(mapReduxStateToProps)(App);
