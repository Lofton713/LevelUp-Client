import React, {useEffect, useState} from "react"
import { getEvents } from "../../managers/EventManager"
import "./EventList.css"

export const EventList = (props) => {

    const [ events, setEvents] = useState([])

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    },[]
    )

    return (
        <article className="events">
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <div className="event__description">{event.description} hosted by {event?.organizers?.user?.first_name}</div>
                        <div className="event__dateTime">{event.date} at {event.time}</div>
                        <div className="event__attendees">Current Attendees: {event.attendees}</div>
                    </section>
                })
            }
        </article>
    )
}

