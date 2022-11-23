import React from 'react'
import MemoCompo from '../components/MemoCompo';

import MessageIcon from '@mui/icons-material/Message';
import { Link } from 'react-router-dom';
const chatbotButtonStyle={
marginLeft:'85%',
inlineSize:'3%', 
position:"fixed", bottom:"70px", right:"30px",
zIndex:'20',
}

const Memo = () => {

  return (
    <>
    <MemoCompo></MemoCompo>


    <Link style={chatbotButtonStyle} to='/chatbotsteps'> <MessageIcon/> </Link>
 

    </>
  )

}
export default Memo;