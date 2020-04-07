import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment'
 
import "react-datepicker/dist/react-datepicker.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

class PickDateStart extends Component {

  constructor (props) {
    super(props)
    this.state = {
      returnStartDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({
      returnStartDate: date
    })
    this.props.parentFunctionStart(moment(this.state.returnStartDate).format('YYYY-MM-DD'));
  }
 
  render() {
    return (
      <div>
          <DatePicker
              selected={ this.state.returnStartDate }
              onChange={ this.handleChange }
              name="returnStartDate"
              dateFormat="yyyy-MM-dd"
          />
      </div>
    );
  }
}

export default PickDateStart;