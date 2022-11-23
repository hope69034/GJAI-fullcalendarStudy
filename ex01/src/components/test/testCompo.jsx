import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';


function App() {
    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (event) => {
            setEvents(event);
        }, 'jsonp');
    }, []);
    
    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);
    
    const view = React.useMemo(() => {
        return {
            calendar: {type:'month'}
        };
    }, []);

    return (
      <>
        <button onClick={()=>{setEvents([{start:"2022-11-18T15:00:00.000Z",end:"2022-11-24T18:00:00.000Z",title:"IDontKnow",color:"#11ff42"}])}}> 일정 생성 </button>
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={true}
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            eventDelete={true}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
      </>
    ); 
}

export default App;