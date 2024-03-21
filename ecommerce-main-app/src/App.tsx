import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "components/AppLayout";
import NotFound from "pages/NotFound";
import { LoadingSpinner } from "reactSharedLib/ReactSharedLibIndex";

const Shopping = lazy(() => import("components/Shopping"));
const Auth = lazy(() => import("components/Auth"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {["/", "/collection", "/about"].map((path) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Shopping />
                </Suspense>
              }
            />
          ))}
          <Route
            path="/auth"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Auth />
              </Suspense>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
