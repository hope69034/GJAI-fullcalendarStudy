import React from 'react'
import {useSelector} from 'react-redux';
import {Dialog, DialogContent, CircularProgress} from '@mui/material';

const Progress = () => {
  const progressToggle = useSelector(state=>(state.progress.progressToggle))
  console.log(progressToggle)
  return (
    <Dialog open={progressToggle}>
      <DialogContent>
        <CircularProgress color='secondary'/>
      </DialogContent>
    </Dialog>
  )
}

export default Progress