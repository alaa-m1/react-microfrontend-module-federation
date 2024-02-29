import Shopping from "components/Shopping";
import { ExternalLink } from "reactSharedLib/ReactSharedLibIndex";
import React from "react";

const App = () => {
  console.log("StyledLink=", ExternalLink);
  return (
    <>
      Ecommerce App - Container App - <br />
      {/* Example of the use of a shared component */}
      <ExternalLink
        url="https://www.linkedin.com/in/alaa-mohammad-767622199/"
        title="LinkedIn"
      />
      <br />
      <Shopping />
    </>
  );
};

export default App;
