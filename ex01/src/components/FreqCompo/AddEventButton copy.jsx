import React from 'react'
// import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import {Fab, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';



/* mui css에 css파일을 오버라이딩 하기 위한*/
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
const cache = createCache({
  key: 'css',
  prepend: true,
});



 const AddEventButton = () => {
  const nav = useNavigate();
  const handleAddEvent = () => {
    nav('/addEvent');
  }
  return (

    <>
<CacheProvider value={cache}>



  <Box sx={{position:"fixed", bottom:"65px", width:"100%", display : "flex", justifyContent:"center"}}>
    <Fab color="primary" aria-label="add" onClick={handleAddEvent}>
      <AddIcon />
    </Fab>
  </Box>


  </CacheProvider>

  </>
  )
}

export default AddEventButton