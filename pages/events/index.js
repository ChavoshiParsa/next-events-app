import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/dummy-data";

export default () => {
  const events = getAllEvents();
  
  return (
    <div>
      <EventList events={events} />
    </div>
  );
};
