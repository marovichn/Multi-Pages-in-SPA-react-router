import { useParams, Link } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>EventDetail Page</h1>
      <h2>ID ::: {params.eventsId} :::</h2>
      <Link to=".." relative="path">
        Go back
      </Link>
    </>
  );
};
export default EventDetailPage;
