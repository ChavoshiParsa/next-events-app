import Link from "next/link";

import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <Link legacyBehavior href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
}