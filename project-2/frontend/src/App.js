import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/RootLayout";
import EventRoot from "./pages/EventRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "events",
        element: <EventRoot></EventRoot>,
        children: [
          {
            index: true,
            element: <EventsPage></EventsPage>,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                /* setError("Fetching events failed."); */
              } else {
                const resData = await response.json();
                return resData.events;
                /*  setFetchedEvents(resData.events); */
              }
            },
          },
          {
            path: ":eventsId",
            element: <EventDetailPage></EventDetailPage>,
          },
          {
            path: "new",
            element: <NewEventPage></NewEventPage>,
          },
          {
            path: ":eventId/edit",
            element: <HomePage></HomePage>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
