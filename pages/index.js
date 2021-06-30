import { Fragment } from "react";
import Link from "next/link";

const index = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link href="/news/5555">ONLY IF U LIKE ME TOOO</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default index;
