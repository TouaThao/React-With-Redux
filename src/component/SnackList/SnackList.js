import React, { Component } from 'react';
import Snack from '../Snack/Snack'
import { connect } from 'react-redux'

class SnackList extends Component {

    handleClick() {
        // this.props.handleGetMoreInfo();
    }

    render() {
        let SnackArray = this.props.SnackList.map(( name,index) => {
            return <Snack name = {name} key = {index}  />
        });


        return (
            <div>
                {SnackArray}
            </div>
        )

    }
}

const mapReduxStateToProps = (reduxState)=>{
    return {reduxState}
  }
  
  
  export default connect(mapReduxStateToProps)(SnackList);