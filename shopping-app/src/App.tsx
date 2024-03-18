import React, { useEffect } from "react";
import "./App.scss";
import { AppLayout } from "./pages/AppLayout";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import { Location, Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "pages/About/AboutPage";
const App = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  const location = useLocation();
  useEffect(() => {
    onNavigate?.(location.pathname);
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home onNavigate={onNavigate} />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
