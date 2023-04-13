import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error occured";
  let content = <p>Something went wrong</p>;

  if (error.status === 500) {
    const errorData = JSON.parse(error.data);
    content = (
      <>
        <p>{errorData.message}</p>
        <h2>{error.status}</h2>
      </>
    );
  }
  if (error.status === 404) {
    title = "Not found!";
    content = (
      <>
        <p>Could not find resource or page :(</p>
        <h2>{error.status}</h2>
      </>
    );
  }

  return (
    <>
      <MainNavigation></MainNavigation>
      <PageContent title={title}>{content}</PageContent>
    </>
  );
};
export default ErrorPage;
