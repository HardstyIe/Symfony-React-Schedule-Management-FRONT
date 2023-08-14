import React, { useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface ClassEvent {
    title: string;
    start: Date;
    end: Date;
}

const CalendarPlanning: React.FC = () => {
    const calendarRef = useRef<FullCalendar | null>(null);

    useEffect(() => {
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();
            calendarApi.gotoDate(new Date());
            const events: ClassEvent[] = [
                { title: '9H00 - 17H00', start: new Date('2023-08-03T09:00:00'), end: new Date('2023-08-03T17:00:00') },
                { title: '9H00 - 17H00', start: new Date('2023-08-02T09:00:00'), end: new Date('2023-08-02T17:00:00') }
                // ... Ajoutez d'autres événements pour d'autres classes et horaires
            ];
            calendarApi.addEventSource(events);
        }
    }, []);

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                ref={calendarRef}
                weekends={false}

                eventContent={(info) => {
                    return (
                        <div className="flex flex-col items-center">
                            <span className="mb-2 text-center">{info.event.title}</span>
                            <div className="mx-auto">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        console.log('Modifier', info.event);
                                    }}
                                    className="px-2 py-1 bg-blue-500 text-white rounded-md"
                                >
                                    Modifier
                                </button>
                            </div>
                        </div>
                    );
                }}
            />
        </div>
    );
};

export default CalendarPlanning;
