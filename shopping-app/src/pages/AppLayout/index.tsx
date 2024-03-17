import { Outlet } from "react-router-dom";

const currentUser = null;
export const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
