import React from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
//import { Calendar } from '@fullcalendar/core';
import FullCalendar from "@fullcalendar/react"; // must go before plugins

function Timeline() {
  
  return (
    <>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        height={"630px"}
        titleFormat={function(date) {
          if (date.date.month < 9) {
            return `${date.date.year}.${"0" + (date.date.month + 1)}`;
          }
          return `${date.date.year}. ${date.date.month + 1}`;
        }}
        headerToolbar={{
          // 날짜, today, prev, next 순서
          start: "prev",
          center: "title",
          end: "today next", //today는 확인 후 지우기
        }}
      />
    </>
  );
}
export default Timeline;