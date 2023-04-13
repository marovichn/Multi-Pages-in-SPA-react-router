import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

const EventRoot = () => {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default EventRoot;
