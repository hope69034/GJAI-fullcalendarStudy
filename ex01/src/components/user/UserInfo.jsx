import {Typography, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Button, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import Snackbar from '../FreqCompo/Snackbar';
import Progress from '../FreqCompo/Progress';

const tableRow = ['아이디','비밀번호','이름','성별','생년월일','직업','집주소','회사주소','질병','삭제'];
export default () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector(state=>(state.user.userInfo));
  const [toggleDelete, setToggleDelete] = useState(false);

  const callApi = async ()=>{
    const response = await fetch('/lifeConcierge/api/userInfo');
    const body = await response.json();
    return body;
  }
  useEffect(()=>{
    callApi()
    .then((res)=>{
    dispatch({type:"USER/USERINFO", user:{userInfo:res}})})
    .catch((err)=>{console.log(err)});
  });
  
  const handleUserDelete = () => {
    const url = "/lifeConcierge/api/userDelete";
    setToggleDelete(false);
    dispatch({type:"PROGRESS", progress:{progressToggle:true}});
    axios.post(url, {email})
    .then(()=>{
      console.log("정상처리 완료 됌");
      dispatch({type:"SNACKBAR/ON", snackbar:{snackbarToggle:true, severity:"success", explain:"정상적으로 삭제 되었습니다."}});
      dispatch({type:"PROGRESS", progress:{progressToggle:false}});
    })
    .catch(()=>{
      dispatch({type:"SNACKBAR/ON", snackbar:{snackbarToggle:true, severity:"error", explain:"오류가 발생 했습니다."}});
      dispatch({type:"PROGRESS", progress:{progressToggle:false}});
    })
  }

  return(
    <Paper sx={{width:"90%", m:"auto"}}>
      <Typography sx={{textAlign:"center", fontSize:"25px", mb:"30px"}}> 유저 정보</Typography>
      <Table>
        <TableHead>
          <TableRow>
            {tableRow.map(cell=><TableCell key={cell}>{cell}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {userInfo?userInfo.map((user,index)=><TableRow key={index}>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.pw}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.gender}</TableCell>
            <TableCell>{user.birthday}</TableCell>
            <TableCell>{user.job}</TableCell>
            <TableCell>{user.hAddr}</TableCell>
            <TableCell>{user.cAddr}</TableCell>
            <TableCell>{user.disease}</TableCell>
            <TableCell><Button variant="contained" color="success" onClick={()=>{setToggleDelete(true); setEmail(user.email)}}>삭제</Button></TableCell>
          </TableRow>):<TableRow><TableCell align='center' colSpan="10"><CircularProgress></CircularProgress></TableCell></TableRow>}
          <Dialog open={toggleDelete} onClose={()=>{setToggleDelete(false)}}>
            <DialogContent>
              <DialogTitle>
                <Typography> 정말 삭제 하시겠습니까?</Typography>
              </DialogTitle>
              <DialogActions>
                <Button variant="contained" color="success" onClick={handleUserDelete}>삭제</Button>
                <Button variant="outlined" color="success" onClick={()=>{setToggleDelete(false)}}>취소</Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </TableBody>
      </Table>
      <Progress/>
      <Snackbar/>
    </Paper>
  );
}