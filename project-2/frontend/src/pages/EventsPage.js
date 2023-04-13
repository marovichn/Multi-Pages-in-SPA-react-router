import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const loadedDataEvents = useLoaderData();

  return (
    <>
      <EventsList events={loadedDataEvents} />
    </>
  );
}

export default EventsPage;
