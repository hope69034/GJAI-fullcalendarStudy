
import React, {useEffect} from 'react'
import Login from './Login';
import MyProfile from '../pages/MyProfile'
import {useSelector, useDispatch} from 'react-redux';
import { Button } from'@mui/material';
import Snackbar from '../components/FreqCompo/Snackbar';
import MessageIcon from '@mui/icons-material/Message';
import { Link } from 'react-router-dom';

import Home from '../pages/Home'

const DoorCompo = () => {
  
  
  const dispatch = useDispatch();
  // 화면이 랜더링시 confirm에 값이 true일 경우 로그인이 성공했습니다. 라는 알림이 뜨는 구문 
  useEffect(()=>{
    if (confirm) {
      dispatch({type:"SNACKBAR/ON", snackbar: {snackbarToggle:true, explain:"로그인 성공 했습니다.", severity:"success"}});
      dispatch({type:"CONFIRM", confirm:false});
    }
  })
  const session = useSelector(state=>(state.session))
  const confirm = useSelector(state=>(state.confirm))
  return (
    <div>
   

  
          {/* <Button onClick={()=>{console.log(session)}}>세션 데이터 확인</Button> */}
          {session.email?<Home/>:<Login/>}
        <Snackbar/>

    </div>
  )

}

export default DoorCompo




 