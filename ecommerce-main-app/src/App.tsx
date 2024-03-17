import Shopping from "components/Shopping";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppLayout } from "components/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Shopping />
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
