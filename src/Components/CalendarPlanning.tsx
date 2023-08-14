import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

interface ClassEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
}

const CalendarPlanning: React.FC = () => {
    const calendarRef = useRef<HTMLDivElement | null>(null);
    let calendar: Calendar | null = null;

    useEffect(() => {
        if (calendarRef.current) {
            calendar = new Calendar(calendarRef.current, {
                plugins: [dayGridPlugin, interactionPlugin],
                weekends: false,
                selectable: true,
                locale: 'fr',
                displayEventTime: false,
                events: [
                    { id: 'event1', title: '9H00 - 17H00', start: '2023-08-03T09:00:00', end: '2023-08-03T17:00:00' },
                    { id: 'event2', title: '9H00 - 17H00', start: '2023-08-02T09:00:00', end: '2023-08-02T17:00:00' }
                    // ... Ajoutez d'autres événements pour d'autres classes et horaires
                ],

                // Fonction qui permet de selectionner une ou plusieurs dates pour les modifier
                // Cette fonction doit etre disponible que pour les roles administrateurs
                select: function (info) {
                    const enteredTitle = prompt('Entrez le(s) nouveau(x) horaire(s)');
                    if (enteredTitle) {
                        const newEvent: ClassEvent = {
                            id: String(new Date().getTime()),
                            title: enteredTitle,
                            start: info.start,
                            end: info.end
                        };
                        calendar.addEvent(newEvent);
                    }
                    calendar.unselect();
                },

                // Cette fonction permet de modifier une horaire existante en cliquant dessus
                // Cette fonction doit etre disponible que pour les roles administrateurs
                eventClick: function (info) {
                    const newTitle = prompt("Modifiez le(s) horaire(s) ou tapez supprimer pour supprimer l'horaire:", info.event.title);

                    if (newTitle !== null) {
                        if (newTitle.toLowerCase() === 'supprimer') {
                            info.event.remove();
                        } else {
                            const updatedEvent: ClassEvent = {
                                ...info.event.extendedProps,
                                title: newTitle,
                                start: info.event.start,
                                end: info.event.end
                            };
                            info.event.remove();
                            calendar.addEvent(updatedEvent);
                        }
                    }
                }



            });

            calendar.render();
        }
    }, []);

    return (
        <div ref={calendarRef}></div>
    );
};

export default CalendarPlanning;
