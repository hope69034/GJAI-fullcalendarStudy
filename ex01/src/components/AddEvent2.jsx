import React, {useState} from 'react'
import {Button, Box, Stack, Switch, TextField, FormControlLabel } from '@mui/material'
import {LocalizationProvider, TimePicker, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CheckWeeks from './FreqCompo/CheckWeeks';
import dayjs from 'dayjs';
import "../css/AddEvent.css";

const AddEvent = () => {
  const [checkWeeks, setCheckWeeks] = useState({mon:false,tue:false,wed:false,thur:false,fri:false,sat:false,sun:false});
  const [checkDaily, setCheckDaily] = useState(false);
  const [checkDetail, setCheckDetail] = useState(true);
  const [eventInfo, setEventInfo] = useState({});

  const handleDailyRoutin = (e) => {
    setCheckDaily(!checkDaily);
    setCheckDetail(true);
    setEventInfo({...eventInfo, [e.target.name] : checkDaily})
  }
  const handleDetailChange = () => {
    setCheckDetail(!checkDetail);

  }
  const [value, setValue] = useState(dayjs('2022-08-18T21:11:54'));

  const handleSDate = (newValue) => {
    setValue(newValue);
    setEventInfo({...eventInfo, sDate : newValue.$d})
  };
  const handleSTime = (newValue) => {
    setValue(newValue);
    setEventInfo({...eventInfo, sTime : newValue.$d})
  };
  const handleEDate = (newValue) => {
    setValue(newValue);
    setEventInfo({...eventInfo, eDate : newValue.$d})
  };
  const handleETime = (newValue) => {
    setValue(newValue);
    setEventInfo({...eventInfo, eTime : newValue.$d})
  };


  const handleEventInfo = (e) => {
    setEventInfo({...eventInfo, [e.target.name] : e.target.value})
  }
  const handleFormSubmit = () => {
    console.log(eventInfo);
  }

  return (
    
     
    <Box className='test'>

      <FormControlLabel control={<Switch name="isDaily" onChange={handleDailyRoutin} />} label="일상루틴" /><br/>
        {checkDaily?<CheckWeeks checkWeeks={checkWeeks} setCheckWeeks={setCheckWeeks}/>:""}
      <Stack spacing={1}>
        <TextField label="제목" name="title" variant="standard" sx={{mb:"20px"}} onChange={handleEventInfo}/>
        {!checkDaily?
        <FormControlLabel control={<Switch defaultChecked onChange={handleDetailChange} />} label="상세시간" />:""}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={1}>
            <MobileDatePicker
                label="시작 날짜"
                name="sDate"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleSDate}
                renderInput={(params) => <TextField {...params} 
                className='s_day'/>}
              />
              {checkDetail?<TimePicker 
              label="시작 시간"
              name="sTime"
              value={value}
              onChange={handleSTime}
              renderInput={(params) => <TextField {...params} />}
              className='s_time' />:""}
          </Stack>
        </LocalizationProvider>
        <br/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={1}>
            <MobileDatePicker
                label="종료 날짜"
                name="eDate"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleEDate}
                renderInput={(params) => <TextField {...params} 
                className='e_day'/>}
              />
            {checkDetail?
            <TimePicker 
              label="종료 시간"
              name="eTime"
              value={value}
              onChange={handleETime}
              renderInput={(params) => 
            <TextField {...params} />}
            className='e_time' />:""}
          </Stack>
        </LocalizationProvider>
        <br/>
        <TextField label="내용" name="content" multiline rows={5} variant="outlined" sx={{mb:"20px"}} onChange={handleEventInfo} className='contents'/>
        <TextField label="장소" name="location" variant="outlined" sx={{mb:"20px"}} onChange={handleEventInfo} className='location' />
        <Button sx={{mt:"10px", float:"right"}} variant="contained" onClick={handleFormSubmit} className='okay'>등록</Button>
      </Stack>
    </Box>
  )
}

export default AddEvent