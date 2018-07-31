import React, { Component } from 'react';
import Snack from '../Snack/Snack'
import { connect } from 'react-redux'

class SnackList extends Component {


    render() {
        let SnackArray = this.props.SnackList.map(( name,index) => {
            return <Snack SnackData = {name} key = {index}/>
        });


        return (
            <div>
                {SnackArray}
            </div>
        );

    }
}

const mapReduxStateToProps = (reduxState) => {
    return { SnackList: reduxState.snackReducer }
  }
  
  
  export default connect(mapReduxStateToProps)(SnackList);