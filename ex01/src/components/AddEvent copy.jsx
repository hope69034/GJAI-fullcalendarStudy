import React, {useState} from 'react'
import {Button, Box, Stack, Switch, TextField, FormControlLabel } from '@mui/material'
import {LocalizationProvider, TimePicker, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CheckWeeks from './FreqCompo/CheckWeeks';
import dayjs from 'dayjs';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AddEvent = () => {
  const email = useSelector(state=>(state.session.email));
  const [checkWeeks, setCheckWeeks] = useState({mon:false,tue:false,wed:false,thu:false,fri:false,sat:false,sun:false});
  const [checkDaily, setCheckDaily] = useState(false);
  const [eventInfo, setEventInfo] = useState({
    checkDaily
  });
  const handleDailyRoutin = () => {
    setCheckDaily(!checkDaily);
  }

  const [start, setStart] = useState(dayjs('2022-11-18T21:11:54'));
  const [end, setEnd] = useState(dayjs('2022-11-19T21:11:54'));

  const handleS = (n) => {
    setStart(n);
    setEventInfo({...eventInfo, start: start.$d})
  }
  const handleE = (n) => {
    setEnd(n);
    setEventInfo({...eventInfo, end: end.$d})
  }
  const handleStartDate = (n) => {
    setStart(n);
    setEventInfo({...eventInfo, start: start.$d})
    console.log(start.$d);
  };
  const handleEndDate = (n) => {
    setEnd(n);
    setEventInfo({...eventInfo, end: end.$d})
    console.log(end.$d);
  };


  const handleEventInfo = (e) => {
    setEventInfo({...eventInfo, [e.target.name] : e.target.value})
  }
  const handleFormSubmit = () => {
    const url = "/lifeConcierge/api/addEvent";
    console.log({...eventInfo,checkWeeks, email, checkDaily});
    axios.post(url, {...eventInfo,checkWeeks, email, checkDaily})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log("에러 발생")})
  }

  return (
    <Box sx={{width:"80%", m:"auto", mt:"60px"}}>
      <FormControlLabel control={<Switch name="checkDaily" onChange={handleDailyRoutin} />} label="일상루틴" /><br/>
        {checkDaily?<CheckWeeks checkWeeks={checkWeeks} setCheckWeeks={setCheckWeeks}/>:""}
      <Stack spacing={1}>
        <TextField size="small" label="제목" name="title" variant="standard" sx={{mb:"20px"}} onChange={handleEventInfo}/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>        
          <MobileDatePicker
            label="시작 날짜"
            inputFormat="MM/DD/YYYY"
            onChange={handleS}
            value={start}
            renderInput={(label) => <TextField size="small" {...label} />}
          />
          <TimePicker 
            label="시작 시간"
            value={start}
            onChange={handleStartDate}
            renderInput={(label) => <TextField size="small" {...label} />}/>
        </LocalizationProvider>
        <br/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
              label="종료 날짜"
              inputFormat="MM/DD/YYYY"
              onChange={handleE}
              value={end}
              renderInput={(label) => <TextField size="small" {...label} />}
            />
          <TimePicker 
            label="종료 시간"
            value={end}
            onChange={handleEndDate}
            renderInput={(label) => <TextField size="small" {...label} />}/>
        </LocalizationProvider>
        <br/>
        <TextField size="small" label="내용" name="content" multiline rows={3} variant="outlined" sx={{mb:"20px"}} onChange={handleEventInfo}/>
        <TextField size="small" label="출발장소" name="sLocation" variant="standard" sx={{mb:"20px"}} onChange={handleEventInfo}/>
        <TextField size="small" label="도착장소" name="eLocation" variant="standard" sx={{mb:"20px"}} onChange={handleEventInfo}/>
      </Stack>
      <Button sx={{mt:"10px", float:"right"}} variant="contained" onClick={handleFormSubmit}>등록</Button>
    </Box>
  )
}%>

export default AddEvent