 
import React from "react";

 
 
import timeGridPlugin from '@fullcalendar/timegrid';


//import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react' // must go before plugins
function Timeline() {
 
 


  return (

   <>
 
 
        <FullCalendar
 
       plugins= {[ timeGridPlugin ]}
  initialView='timeGridWeek' 
      />


</>
    
  );
}

export default Timeline;





