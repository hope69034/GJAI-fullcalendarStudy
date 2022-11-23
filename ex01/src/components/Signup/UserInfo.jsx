import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Container, TextField, Stack} from '@mui/material';
import axios from 'axios'
import {useSelector} from'react-redux';
import {useState} from 'react';

export default ({ inputUserInfo, setInputUserInfo }) => {
  const userInfo = useSelector(state=>state.user.userInfo);
  const addCustomer = () => {
    const url = "/lifeConcierge/api/signUp";
    const data = {
      email:inputUserInfo.email,
      pw:inputUserInfo.pw,
      name:inputUserInfo.name,
      gender:inputUserInfo.gender,
      birthday:inputUserInfo.birthday,
      job:inputUserInfo.job,
      hAddr:inputUserInfo.hAddr,
      cAddr:inputUserInfo.cAddr,
      disease:inputUserInfo.disease
    }
    return axios.post(url,data);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    addCustomer()
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});
  }
  const [checkId, setCheckId] = useState({
    error:false,
    helperText:""
  })
  const handleOnChange = (e)=>{
    setInputUserInfo({...inputUserInfo, email:e.target.value})
    
  }
  return(
    <Container sx={{marginTop:"2%"}}>
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={2} alignItems="stretch">
          <TextField error={inputUserInfo.email===""?true:false} label="E-mail" name="email" value={inputUserInfo.email} onChange={handleOnChange}></TextField>
          <TextField error={inputUserInfo.pw===""?true:false} label="비밀번호" type="password" name="pw" onChange={(e)=>{setInputUserInfo({...inputUserInfo, pw:e.target.value})}}></TextField>
          <TextField error={inputUserInfo.name===""?true:false} label="이름" name="name" value={inputUserInfo.name} onChange={(e)=>{setInputUserInfo({...inputUserInfo, name:e.target.value})}}></TextField>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">성별</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="gender"
            >
              <FormControlLabel value="남자" control={<Radio onChange={(e)=>{setInputUserInfo({...inputUserInfo, gender : e.target.value})}}/>} label="남자" />
              <FormControlLabel value="여자" control={<Radio onChange={(e)=>{setInputUserInfo({...inputUserInfo, gender : e.target.value})}}/>} label="여자" />
            </RadioGroup>
          </FormControl>
          <TextField error={inputUserInfo.brithday===""?true:false} helperText="생년월일" required type="date" name="birthday" value={inputUserInfo.birthday} onChange={(e)=>{setInputUserInfo({...inputUserInfo, birthday:e.target.value})}}></TextField>
          <TextField error={inputUserInfo.job===""?true:false} label="직업" name="job" value={inputUserInfo.job} onChange={(e)=>{setInputUserInfo({...inputUserInfo, job:e.target.value})}}></TextField>
          <TextField error={inputUserInfo.hAddr===""?true:false} label="집주소" name="hAddr" value={inputUserInfo.hAddr} onChange={(e)=>{setInputUserInfo({...inputUserInfo, hAddr:e.target.value})}}></TextField>
          <TextField error={inputUserInfo.cAddr===""?true:false} label="회사주소" name="cAddr" value={inputUserInfo.cAddr} onChange={(e)=>{setInputUserInfo({...inputUserInfo, cAddr:e.target.value})}}></TextField>
          <TextField error={inputUserInfo.disease===""?true:false} label="질병" name="disease" value={inputUserInfo.disease} onChange={(e)=>{setInputUserInfo({...inputUserInfo, disease:e.target.value})}}></TextField>
        </Stack>
      </form>
    </Container>
  );
}