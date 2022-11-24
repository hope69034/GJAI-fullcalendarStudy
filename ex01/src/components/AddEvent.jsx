import React, {useState} from 'react'
import {Button, Box, Stack, Switch, TextField, FormControlLabel, FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import {LocalizationProvider, TimePicker, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CheckWeeks from './FreqCompo/CheckWeeks';
import dayjs from 'dayjs';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Progress from './FreqCompo/Progress';
import Snackbar from './FreqCompo/Snackbar';

const AddEvent = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector(state=>(state.session.email));
  const [checkWeeks, setCheckWeeks] = useState({mon:false,tue:false,wed:false,thu:false,fri:false,sat:false,sun:false});
  const [checkDaily, setCheckDaily] = useState(false);
  const [eventInfo, setEventInfo] = useState({
    checkDaily
  });
  const [checkSpecial, setCheckSpecial] = useState(false);
  const [preAlarm, setPreAlarm] = useState(0);

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
  };
  const handleEndDate = (n) => {
    setEnd(n);
    setEventInfo({...eventInfo, end: end.$d})
  };


  const handleEventInfo = (e) => {
    setEventInfo({...eventInfo, [e.target.name] : e.target.value})
  }
  const handleFormSubmit = () => {
    const url = "http://localhost:5000/lifeConcierge/api/addEvent";
    console.log({...eventInfo,checkWeeks, email, checkDaily, checkSpecial, preAlarm});
    dispatch({type:"PROGRESS", progress:{progressToggle:true}});
    axios.post(url, {...eventInfo,checkWeeks, email, checkDaily, checkSpecial, preAlarm})
    .then((res)=>{
      if(res.data.affectedRows) {
        dispatch({type:"ISEVENTADDED", isEventAdded:true})
        dispatch({type:"PROGRESS", progress:{progressToggle:false}});
        nav('/home');
      } else {
        dispatch({type:"SNACKBAR/ON", snackbar: {snackbarToggle:true, explain:"일정등록 실패", severity:"error"}});
        dispatch({type:"PROGRESS", progress:{progressToggle:false}});
      }
      
    })
    .catch((err)=>{console.log("에러 발생")})
  }

  return (
    <Box sx={{width:"80%", m:"auto", mt:"60px"}}>
      <FormControlLabel control={<Switch name="checkDaily" onChange={handleDailyRoutin} />} label="일상루틴" /><br/>
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
        {checkDaily?<CheckWeeks checkWeeks={checkWeeks} setCheckWeeks={setCheckWeeks}/>:""}
        
        {/* <TextField size="small" label="내용" name="content" multiline rows={5} variant="outlined" style={{marginBottom:"20px"}} onChange={handleEventInfo}/> */}
        <TextField size="small" label="내용" name="content" multiline rows={3} variant="outlined" sx={{mb:"20px"}} onChange={handleEventInfo}/>

        {/* <TextField label="장소" name="location" variant="outlined" sx={{mb:"20px"}} onChange={handleEventInfo}/> */}
        <TextField size="small" label="출발장소" name="sLocation" variant="standard" sx={{mb:"20px"}} onChange={handleEventInfo}/>
        <TextField size="small" label="도착장소" name="eLocation" variant="standard" sx={{mb:"20px"}} onChange={handleEventInfo}/>
        
        <FormControlLabel control={<Switch name="checkDaily" onChange={()=>{setCheckSpecial(!checkSpecial)}} />} label="특별일정" /><br/>
        <FormControl variant='filled' size='small' sx={{width:"200px", mt:"0"}}>
          <InputLabel id="demo-simple-select-label">미리 알림</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={preAlarm}
            onChange={(e)=>{setPreAlarm(e.target.value)}}
          >
            <MenuItem value={0}>알림없음</MenuItem>
            <MenuItem value={10}>10분전</MenuItem>
            <MenuItem value={20}>20분전</MenuItem>
            <MenuItem value={30}>30분전</MenuItem>
            <MenuItem value={60}>60분전</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Button sx={{mt:"10px", float:"right"}} variant="contained" onClick={handleFormSubmit}>등록</Button>
      <Snackbar/>
      <Progress/>
    </Box>
  )
}
export default AddEvent;