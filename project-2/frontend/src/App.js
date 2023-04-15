import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsDataLoader } from "./pages/EventsPage";
import EventDetailPage, {
  loader as eventDetailDataLoader,
  action as eventDetailDeleteAction,
} from "./pages/EventDetailPage";
import NewEventPage, { action as newEventSaving } from "./pages/NewEventPage";
import RootLayout from "./pages/RootLayout";
import EventRoot from "./pages/EventRoot";
import ErrorPage from "./pages/Error";
import EditEventPage from "./pages/EditEventPage";
import { action as eventFormAction } from "../src/components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage />,
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
            loader: eventsDataLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailDataLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage></EventDetailPage>,
                action: eventDetailDeleteAction,
              },
              {
                path: "edit",
                element: <EditEventPage></EditEventPage>,
                action: eventFormAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage></NewEventPage>,
            action: eventFormAction,
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
