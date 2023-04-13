import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProducrtDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
