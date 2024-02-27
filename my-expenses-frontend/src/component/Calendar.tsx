"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useCallback } from "react";

const Calendar = () => {
  const handleDateClick = useCallback((arg: DateClickArg) => {
    alert(arg.dateStr);
  }, []);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale={"ja"}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default Calendar;

// "use client"
//
// import React, { useState } from 'react';
//
// const Calendar = () => {
//     const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//
//     const handleDateClick = (date: Date) => {
//         setSelectedDate(date);
//     };
//
//     const generateCalendar = () => {
//         // カレンダーの日付を生成するロジック
//         // const daysInMonth = 31; // 月の日数（適宜変更）
//         let daysInMonth = null;
//
//
//         const currentDate = new Date();
//         const currentMonth = currentDate.getMonth();
//         const currentYear = currentDate.getFullYear();
//
//         if(currentMonth == 2) {
//             daysInMonth = 28;
//         } else if(currentMonth == 4) {
//             daysInMonth = 30;
//         } else if(currentMonth == 6) {
//             daysInMonth = 30;
//         } else if(currentMonth == 9) {
//             daysInMonth = 30;
//         } else if(currentMonth == 11) {
//             daysInMonth = 30;
//         } else {
//             daysInMonth = 31;
//         }
//
//         const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
//         const startingDay = firstDayOfMonth.getDay(); // 月の最初の日の曜日（0から6の値）
//         const calendarDays = []; // 実際の生成ロジックは適切に実装してください
//
//         // 前月の日数を埋める
//         for (let i = 0; i < startingDay; i++) {
//             calendarDays.push('');
//         }
//
//         // 月の日数を追加
//         for (let i = 1; i <= daysInMonth; i++) {
//             calendarDays.push(new Date(currentYear, currentMonth, i));
//         }
//
//         return calendarDays.map((date, index) => (
//             <div key={index} onClick={() => handleDateClick(date as Date)} className="calendar-day ${date === selectedDate ? 'selected' : ''}">
//                 {date instanceof Date? date.getDate() : ""}
//             </div>
//         ));
//     };
//
//     // カレンダーの表示ロジックを追加
//
//     return (
//         <div>
//             <h2>カレンダー</h2>
//             <div className="calendar-grid">
//                 {generateCalendar()}
//             </div>
//         </div>
//     );
// };
//
// export default Calendar;
