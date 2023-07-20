import EventItems from "./EventItem";
import classes from "./EventList.module.css";

export default function EventList(props) {
  return (
    <ul className={classes.list}>
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
