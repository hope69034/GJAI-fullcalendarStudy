import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import {Fab, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import FavoriteIcon from '@mui/icons-material/Favorite';

const AddEventButton = () => {
  const nav = useNavigate();
  const handleAddEvent = () => {
    nav('/addEvent');
  }
  return (
  <> 
  <Box sx={{position:"fixed", bottom:"65px", width:"100%", display : "flex", justifyContent:"right"}}>
    <Fab color="primary" aria-label="add" onClick={handleAddEvent}>
      <AddIcon />
    </Fab>
  </Box>
  </>
  )
}

export default AddEventButton