import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/helper/api-util";

export default (props) => {
  // const router = useRouter();

  // const filteredData = router.query.slug;

  // if (!filteredData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const filteredYear = +filteredData[0];
  // const filteredMonth = +filteredData[1];

  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid filter, Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(props.data.year, props.data.month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />;
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      events: filteredEvents,
      data: {
        year: filteredYear,
        month: filteredMonth,
      },
    },
  };
}
