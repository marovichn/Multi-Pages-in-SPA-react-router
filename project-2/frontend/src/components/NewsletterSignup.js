import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect, useState } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const [enteredValue, setEnteredValue] = useState();
  const { data, state } = fetcher;
  const valueHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const submitHandler = () => {
    setEnteredValue("");
  };

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);
  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
      onSubmit={submitHandler}
    >
      <input
        value={enteredValue}
        onChange={valueHandler}
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
