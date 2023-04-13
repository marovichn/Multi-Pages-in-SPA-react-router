import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <main className={classes.content}>
        <MainNavigation></MainNavigation>
        <Outlet></Outlet>
      </main>
    </>
  );
};
export default RootLayout;
