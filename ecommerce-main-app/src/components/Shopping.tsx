import { useRef, useEffect, useState } from "react";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { mount } from "shopping/ShoppingIndex";

const Shopping = () => {
  const divRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [fn, setFn] = useState<(panth: string) => void | null>(null);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      // (ref.current as any)(pathname);
    }
    if (fn) {
      fn(pathname);
    }
  }, [pathname, fn]);
  useEffect(() => {
    const { onParentNavigate } = mount(divRef.current, {
      onNavigate: ({ pathname: newPathName }: Location<any>) => {
        if (pathname !== newPathName) {
          navigate(newPathName);
        }
      },
    });
    setFn(() => onParentNavigate);
    ref.current = onParentNavigate;
  }, []);
  return <div ref={divRef}></div>;
};

export default Shopping;
