import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from'@mui/material';
import axios from 'axios';
import Progress from './FreqCompo/Progress';
import { useNavigate } from'react-router-dom';

export default () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const session = useSelector(state=>(state.session))
  const handleLogout = () => {
    dispatch({type:"PROGRESS", progress:{progressToggle:true}});
    axios.get('/lifeConcierge/api/logout')
    .then(()=>{
    })
    .catch(()=>{
      dispatch({type:"SNACKBAR/ON", snackbar:{snackbarToggle:true}});  
    })
    window.location.replace("/myProfile");
  }
  return (
    <div style={{height:"500px", display:"flex", flexWrap:"wrap"}}>
      <div style={{margin:"auto", display:"block"}}>{`${session.name} 프로필`}</div>
      <Button style={{margin:"auto"}} variant="contained" color="success" onClick={handleLogout}>로그아웃</Button>
      {session.email=="admin"? 
      <div style={{margin:"auto"}}>
        <Button variant='contained' color="success" onClick={()=>{nav('/userinfo')}}>고객 정보 확인</Button>
      </div>
      :""}
      <Progress/>
    </div>
  )
}
