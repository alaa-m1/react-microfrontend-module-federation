import React, { useEffect } from "react";
import "./App.scss";
import { AppLayout } from "./pages/AppLayout";
import Auth from "./pages/Auth";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {
  Location,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AboutPage from "pages/About/AboutPage";
const App = ({
  onNavigate,
}: {
  onNavigate?: (location: Location<any>) => void;
}) => {
  const location = useLocation();
  useEffect(() => {
    onNavigate?.(location);
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="collection" element={<Collection />} />
        <Route path="auth" element={<Auth />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
