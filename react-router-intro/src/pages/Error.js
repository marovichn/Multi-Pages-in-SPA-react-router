import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <h1>An Error occured</h1>
        <p>Could not find page you are loooking for</p>
      </main>
    </>
  );
};
export default ErrorPage;
