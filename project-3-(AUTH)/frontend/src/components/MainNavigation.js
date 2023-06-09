import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
  const token = useRouteLoaderData("root");

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          <li></li>
        </ul>
      </nav>
      <NewsletterSignup />
      {!token && (
        <NavLink
          to="/auth?mode=login"
          className={({ isActive }) =>
            isActive ? classes["active-log"] : classes["log"]
          }
        >
          Log In
        </NavLink>
      )}
      {token && (
        <li className={classes.logOut}>
          <Form action="/logout" method="post">
            <button>Log Out</button>
          </Form>
        </li>
      )}
    </header>
  );
}

export default MainNavigation;
