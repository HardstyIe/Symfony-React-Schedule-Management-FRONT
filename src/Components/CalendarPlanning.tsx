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
                // enlève les week-end
                weekends: false,
                // Permet de sélectionner plusieur date en meme temps
                selectable: true,
                // Met le calendrier en francais
                locale: 'fr',
                // Enlève les éléments avant les événements (éléments du type 9a ou 0H00)
                displayEventTime: false,
                // Permet de personnaliser le header ( mois bouton today, prev, next)
                headerToolbar: {
                    right: 'prev,next today',
                    center: 'title',
                    left: '',
                },
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


            // css pour le header du calendrier
            const header = calendarRef.current.querySelector('.fc-toolbar') as HTMLElement;
            if (header) {
                header.style.display = 'block'
            }

            const title = calendarRef.current.querySelector('.fc-toolbar-title') as HTMLElement;
            if (title) {
                title.style.marginBottom = '3%'
            }

        }
    }, []);


    return (
        <>
            <div className='md:h-auto' style={{ minHeight: '1000px' }} ref={calendarRef}></div>
        </>
    );

};

export default CalendarPlanning;
