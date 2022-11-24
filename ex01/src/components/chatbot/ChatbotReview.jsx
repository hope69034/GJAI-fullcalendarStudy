import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
/* import { fontWeight } from "@mui/system";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Eventcalendar, toast, getJson } from '@mobiscroll/react'; */
class ChatbotReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
    };
  }
  
  /*     handleSubmit(){
        axios.post(url ,data ) 
        .then((res)=>{console.log()})
        .catch((res)=>{console.log('error')})
    } */

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    let { name, gender, age } = this.state;

    let data = {
      name: name.value,
      gender: gender.value,
      age: age.value,
    };
    axios
      .post("/chatbotUpdate", data)
      .then((res) => {
        console.log("라우터다녀옴");
      })
      .catch((res) => {
        console.log("error");
      });

    return (
      /*   <form onSubmit={'/chatbotUpdate'} method='post'> */
      <div style={{ width: "100%" }}>
        <table>
          <tbody>
            <tr>
              <td>Name :</td>
              <td>{name.value}</td>
              {/* <td id = 'name'>{name.value}</td> */}
            </tr>
            <tr>
              <td>Gender : </td>
              <td>{gender.value}</td>
              {/* <td id = 'gender'>{gender.value}</td> */}
            </tr>
            <tr>
              <td>Age : </td>
              <td>{age.value}</td>
              {/* <td id = 'age'>{age.value}</td> */}
            </tr>
          </tbody>
        </table>
        {/*   <button type='submit'>db로보내서수정</button> */}
        {/* <button onClick={handleSubmit}>db로보내서수정</button> */}
      </div>
      /*  </form> */
    );
  }
}

ChatbotReview.propTypes = {
  steps: PropTypes.object,
};
ChatbotReview.defaultProps = {
  steps: undefined,
};

export default ChatbotReview;
