import { useRef, useEffect } from "react";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { mount } from "auth/AuthIndex";

const Auth = () => {
  const divRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    mount(divRef.current, {
      onNavigate: (newPathName: string) => {
        if (pathname !== newPathName) {
          navigate(newPathName);
        }
      },
    });
  }, []);

  return <div ref={divRef}></div>;
};

export default Auth;
