"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const Calendar = () => {
  const { push } = useRouter();
  const handleDateClick = useCallback(
    (arg: DateClickArg) => {
      push(`/date/${arg.dateStr}`);
    },
    [push],
  );

  return (
    <div className={"hover: cursor-pointer"}>
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
