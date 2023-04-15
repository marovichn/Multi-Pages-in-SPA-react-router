import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.keys(data.errors).map((err) => (
              <li key={err}>
                This {err}{" "}
                {err === "email" ? " is already signed or it is " : "is "}{" "}
                invalid.
              </li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmiting}>
            {isSubmiting ? "Submiting..." : "Save"}
          </button>
        </div>
        {data && data.message && <p className={classes.errP}>{data.message}</p>}
      </Form>
    </>
  );
}

export default AuthForm;
