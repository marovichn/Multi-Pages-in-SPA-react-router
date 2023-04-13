import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsDataLoader } from "./pages/EventsPage";
import EventDetailPage, {
  loader as eventDetailDataLoader,
} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/RootLayout";
import EventRoot from "./pages/EventRoot";
import ErrorPage from "./pages/Error";

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
            path: ":eventsId",
            element: <EventDetailPage></EventDetailPage>,
            loader: eventDetailDataLoader,
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
