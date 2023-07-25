import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/helper/api-util";

export default (props) => {
  return (
    <div>
      <EventList events={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}
