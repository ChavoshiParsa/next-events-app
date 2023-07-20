import EventItems from "./EventItem";

export default function EventList(props) {
  return (
    <ul>
      {props.events.map((event) => (
        <EventItems
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
