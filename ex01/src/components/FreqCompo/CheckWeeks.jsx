import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

const CheckWeeks = ({checkWeeks, setCheckWeeks}) => {
  const props = {
    checkbox : { inputProps: { 'aria-label': 'Checkbox demo' }, sx: { color: "#adb1ed", '&.Mui-checked': { color: "#4d50a8"}}},
    formControlLabel : {labelPlacement: "top", sx:{margin:"0px"}}
  }
  const handleWeeks = (e) => {
    setCheckWeeks({[e.target.name]:!checkWeeks})
    console.log(checkWeeks)
  }
  return (
    <div>
      <FormControlLabel {...props.formControlLabel} control={<Checkbox {...props.checkbox} name="mon" onChange={handleWeeks}/>} label="월" />
      <FormControlLabel {...props.formControlLabel} control={<Checkbox {...props.checkbox} name="tue" onChange={handleWeeks}/>} label="화" />
      <FormControlLabel {...props.formControlLabel} control={<Checkbox {...props.checkbox} name="wed" onChange={handleWeeks}/>} label="수" />
      <FormControlLabel {...props.formControlLabel} control={<Checkbox {...props.checkbox} name="thur"onChange={handleWeeks}/>} label="목" />
      <FormControlLabel {...props.formControlLabel} control={<Checkbox {...props.checkbox} name="fri" onChange={handleWeeks}/>} label="금" />
      <FormControlLabel {...props.formControlLabel} control={<Checkbox {...props.checkbox} name="sat" onChange={handleWeeks}/>} label="토" />
      <FormControlLabel {...props.formControlLabel} control={<Checkbox {...props.checkbox} name="sun" onChange={handleWeeks}/>} label="일" />
    </div>
  )
}

export default CheckWeeks