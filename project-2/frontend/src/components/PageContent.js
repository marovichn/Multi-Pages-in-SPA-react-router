import classes from "./PageContent.module.css";

function PageContent({ title, message, children }) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      <p>{message}</p>
      {children}
    </div>
  );
}

export default PageContent;
