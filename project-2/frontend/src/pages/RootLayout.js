import MainNavigation from "../components/MainNavigation";
import { Outlet /* useNavigation */ } from "react-router-dom";

const RootLayout = () => {
  /* const navigation = useNavigation(); */

  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
export default RootLayout;
