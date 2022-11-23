import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import {List, ListItem, ListItemText, Divider} from "@mui/material" //
import interactionPlugin from '@fullcalendar/interaction';
import {Button, Dialog, DialogTitle, DialogActions, DialogContent} from "@mui/material";//mui의 Dialog
import { useNavigate } from "react-router-dom";
import { NextPlan, Preview } from '@mui/icons-material';


const Calendar = () => {
  const nav = useNavigate();
  const [open, setOpen] = useState(false); //보관할 초기값

  
  
  const handleClick = () =>{ 
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false);
    
  }
  const viewEvent= () => {
    nav('/event')
  }
  return (
    <div>
       <FullCalendar //속성값들
      //  locale='ko' //한글 설정
       events={[{title:'', date:'2022-11-28'},{title:'event 1', date:'2022-11-28'},{title:'event 1', date:'2022-11-28'}]}
       //**이벤트별로 색 다르게 해야됨
       eventDisplay=''//이벤트 모양?
       eventColor = 'red'
       eventClick={handleClick}
       plugins={[ dayGridPlugin ]} 
       initialView="dayGridMonth"

       buttonIcons={{ //버튼 아이콘?
        
       }}

       buttonText={{ //버튼 안에 들어가는 텍스트
        today:'today',
        month:'month',
        week:'week',
        day:'day',
        list:'list',        
       }}

       headerToolbar={{ // 날짜, today, prev, next 순서
        start : 'prevYear prev',
        center : 'title',
        end : 'next nextYear today', //today는 확인 후 지우기
      
       }}
       
       titleFormat={
        {year: 'numeric', month: 'long'}
       }
       
   //  weekends={false} //주말 생성
       />     
      <Dialog onClose={handleClose} open={open} onClick={viewEvent}> {/* onClick={} 안에 함수이름 넣어야함 */}
        <DialogTitle>
          클릭한 날짜
        </DialogTitle>
        <DialogContent>
          주요 내부 글 작성란
        </DialogContent>
        <DialogActions>
          <Button>세부 이벤트 보기</Button>
        </DialogActions>
      </Dialog>   
    </div>
  )
}

export default Calendar;
