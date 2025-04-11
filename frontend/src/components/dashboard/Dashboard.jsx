import { Outlet } from "react-router";
import LeftSide from "./leftSide";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 overflow-hidden w-full h-screen bg-[#F8FAFC]">
      <LeftSide />

      <Outlet />
    </div>
  );
};
export default Dashboard;
