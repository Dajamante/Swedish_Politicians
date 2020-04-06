import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment'
 
import "react-datepicker/dist/react-datepicker.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

class PickDateStop extends Component {

  constructor (props) {
    super(props)
    this.state = {
      returnStopDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({
      returnStopDate: date
    })
    this.props.parentFunctionStop(moment(this.state.returnStopDate).format('YYYY-MM-DD'));
  }
 
  render() {
    return (
      <div>
          <DatePicker
              selected={ this.state.returnStopDate }
              onChange={ this.handleChange }
              name="returnStopDate"
              dateFormat="YYYY-MM-DD"
              inline
          />
      </div>
    );
  }
}

export default PickDateStop;