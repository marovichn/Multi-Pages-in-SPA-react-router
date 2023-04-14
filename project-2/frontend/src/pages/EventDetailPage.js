import { useRouteLoaderData, Link, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

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
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/` + id);
  if (!response.ok) {
    throw Response(JSON.stringify({ message: "Could not fetch" }), {
      status: 404,
    });
  } else {
    return response;
  }
};

export async function action({ req, params }) {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/` + eventId, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw Response(JSON.stringify({ message: "Could not delete" }), {
      status: 404,
    });
  } else {
    return redirect("/events");
  }
}
