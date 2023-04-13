import { useLoaderData, Link } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useLoaderData();

  return (
    <>
      <EventItem event={data.event} />
      <Link to=".." relative="path">
        Go back
      </Link>
    </>
  );
};
export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventsId;
  const response = await fetch(`http://localhost:8080/events/` + id);
  if (!response.ok) {
    throw Response(JSON.stringify({ message: "Could not fetch" }), {
      status: 404,
    });
  } else {
    return response;
  }
};
