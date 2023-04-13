import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Got to the <Link to="/products">products page.</Link>
      </p>
    </>
  );
};
export default HomePage;
