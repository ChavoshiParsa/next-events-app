import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { getAllEvents } from "@/helper/api-util";
import { useRouter } from "next/router";

export default (props) => {
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
