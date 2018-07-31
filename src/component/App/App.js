import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

//componenet
import SnackList from '../SnackList/SnackList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newSnack : '',
    }
  }

  handleSnackChange = (event) =>{
    this.setState({
      newSnack : event.target.value
    })
  }


  render() {
    return (
      <div >
       <input type="text" onChange={this.handleSnackChange}></input>
      <button onClick={()=> this.props.dispatch({type: 'Add_Snack', payload: this.state.newSnack})}>Button three</button>
        <SnackList SnackList = {this.props.reduxState.snackReducer}/>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState)=>{
  return {reduxState}
}


export default connect(mapReduxStateToProps)(App);
