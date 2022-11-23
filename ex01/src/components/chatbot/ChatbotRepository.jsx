import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
// .py 다루기
//import { spawn } from "child_process";
// 아바타 바꾸기
import greenihead from "../../img/greenihead.png";
const botAvatar = greenihead;

//채팅창 css
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#59b4a4;;",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#59b4a4;;",
  botFontColor: "#fff",
  userBubbleColor: "#2196f3",
  userFontColor: "#fff",
  marginbottom: '1px'
};

function abc(nn) {

// const spawn = require("child_process").spawn;
 //const outp = spawn("python", ["talkmodel.py", nn]);
   //  outp.stdout.on("data", (result) => {
    //console.log(result.toString());
//    return result.toString()
  return nn;

}
 
const steps = [
  {
    id: "1",
    message: "Hello!",
 
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    inputAttributes: {
      keyboardType: 'email-address'
    },
    trigger: "3",
  },
  {
    id: "3",
    message: ({ previousValue, steps }) => abc("{previousValue}"),
    trigger: ({ value, steps }) => '2',
    /* component: <CustomComponent /> */
    /* end: true, */
    /* options: [
      { value: 1, label: 'Number 1', trigger: '3' },
      { value: 2, label: 'Number 2', trigger: '2' },
      { value: 3, label: 'Number 3', trigger: '2' },
    ], */
    /* replace */

/*     {
      id: 'firstname',
      user: true,
      validator: (value) => {
        if (/^[A-Za-z]+$/.test(value)) {
          return true
        } else {
          return 'Please input alphabet characters only.'
        }
      },
      trigger: 'rmcbot',
    }, */



  },
];

function Greeni() {
  return (
    <>
      <ThemeProvider theme={theme}  >{/* css */}
        <ChatBot
          headerTitle="Greeni" //채팅창 타이틀
          steps={steps} //인풋아웃풋대본
          botAvatar={botAvatar}
          className='greeniChatbot'//클래스네임(CSS를위한)
         /*  hideHeader='false' */
        
        />  
      </ThemeProvider>
    </>
  );
}
export default Greeni


{/* 챗봇
<Link style={chatbotButtonStyle} to='/chatbot'> <MessageIcon/> </Link>
 
import MessageIcon from '@mui/icons-material/Message';
import { Link } from 'react-router-dom';
import greenihead from '../img/greenihead.png'
const chatbotButtonStyle={
marginLeft:'85%',
inlineSize:'3%', 
position:"fixed", bottom:"50px", right:"10px",
}*/}
{/* <Link style={chatbotButtonStyle} to='/chatbot'> <MessageIcon/> </Link> */}
{/* <Link style={{position:"fixed", bottom:"20px", right:"10px"}} to='/chatbot'> <MessageIcon/> </Link>   */}
{/* <a href='https://hope69034-chatbotgreeni-psychotherapy-toa0l9.streamlit.app/' style={{position:"fixed", bottom:"80px", right:"10px"}}><MessageIcon></MessageIcon></a>  */}

