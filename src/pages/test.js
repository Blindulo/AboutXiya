import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/who">users</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

export default IndexPage;
