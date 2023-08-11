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


                // Tout ce qui suit doit etre accessible par un administrateur, il s'agit du bouton modifier pour la gestion du planning du cours
                eventClick={(info) => {

                    // Gérer le clic sur un événement (par exemple, ouvrir un formulaire de modification)
                    console.log(info.event); // Accédez à l'événement cliqué
                }}
                eventContent={(info) => {
                    // Personnalisez le contenu de chaque événement de chaque jour du planning
                    return (
                        <div className="flex justify-between items-center">
                            {info.event.title}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // Évite la propagation du clic à l'événement

                                    // Gérer le clic sur le bouton Modifier
                                    // Le formulaire sera intégré à la place du log avec un modal
                                    console.log('Modifier', info.event);
                                }}
                                className="px-2 py-1 bg-blue-500 text-white rounded-md"
                            >
                                Modifier
                            </button>
                        </div>
                    );
                }}
            />
        </div>
    );
};

export default CalendarPlanning;
