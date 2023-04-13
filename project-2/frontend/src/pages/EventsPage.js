import { Link } from "react-router-dom";
import classes from "./EventsPage.module.css";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "A dummy event1",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e2",
    title: "A dummy event2",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e3",
    title: "A dummy event3",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
];

const EventsPage = () => {
  return (
    <>
      <section className={classes.section}>
        <h1>Events:</h1>
        <ul className={classes.list}>
          {DUMMY_DATA.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <img src={item.image} />
              <Link to={`/events/${item.id}`}>More details</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default EventsPage;
