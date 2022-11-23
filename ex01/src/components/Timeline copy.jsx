 
import React from "react";

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

//import { Calendar } from '@fullcalendar/core';
//import timeGridPlugin from '@fullcalendar/timegrid';

//import { Calendar } from '@fullcalendar/core';
//import timeGridPlugin from '@fullcalendar/timegrid';

//import FullCalendar from '@fullcalendar/react' // must go before plugins


/* mui css에 css파일을 오버라이딩 하기 위한*/
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
const cache = createCache({
  key: 'css',
  prepend: true,
});



 
function Timeline() {
  //const [myEvents, setEvents] = React.useState([]);

 

 


  return (

     <div>
     {/* mui css에 css파일을 오버라이딩 하기 위한 */}
        <CacheProvider value={cache}>

 
        <FullCalendar
       plugins={[ dayGridPlugin ]} 
        
        initialView="dayGridMonth" 
/*        plugins= {[ timeGridPlugin ]}
  initialView='timeGridWeek' */ 
      />


   

     </CacheProvider>
     </div>
    
  );
}

export default Timeline;





