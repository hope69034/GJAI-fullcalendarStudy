import React,{useEffect, useState}from 'react';
import axios from 'axios'
import {useSelector} from'react-redux';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
 
function Calendar() {
    const [myEvents, setEvents] = useState([]);
    const email = useSelector(state=>(state.session.email));
    useEffect(() => {
      axios.post("/lifeConcierge/api/showDailyEvent", {email})
      .then(res=>{
        console.log(res.data);
        setEvents(res.data)
      })
      .catch(err=>{console.log(err)});
    }, []);    
/*     React.useEffect(() => {
      getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
          setEvents(events);
      }, 'jsonp');
  }, []);   */




 

    return (
      <>
 


<FullCalendar
         plugins={[ dayGridPlugin ]} 
        
        initialView="dayGridMonth"  
 /*       plugins= {[ timeGridPlugin ]}
  initialView='timeGridWeek'  */
      />

       <button onClick={()=>{console.log(myEvents)}}></button>
      </>
    ); 
}

export default Calendar;