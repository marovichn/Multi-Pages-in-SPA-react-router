import { Link, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return <EventForm event={event}></EventForm>;
};
export default EditEventPage;
