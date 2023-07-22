import Link from "next/link";

import classes from "./Button.module.css";

export default function Button(props) {
  if (props.link) {
    return (
      <Link legacyBehavior href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} type="submit">
      {props.children}
    </button>
  );
}
