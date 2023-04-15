import {
  useRouteLoaderData,
  Link,
  redirect,
  defer,
  json,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents}></EventsList>}
        </Await>
      </Suspense>

      <Link to=".." relative="path">
        Go back
      </Link>
    </>
  );
};

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/` + id);
  if (!response.ok) {
    throw Response(JSON.stringify({ message: "Could not fetch" }), {
      status: 404,
    });
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export const loader = async ({ request, params }) => {
  const id = params.eventId;
  return defer({
    events: loadEvents(),
    event: await loadEvent(id),
  });
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
