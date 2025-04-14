import { Outlet } from "react-router";
import LeftSide from "./leftSide";

const Dashboard = () => {
  return (
    <div className="flex w-screen  h-screen bg-[#F8FAFC]">
      <LeftSide />

      <Outlet />
    </div>
  );
};
export default Dashboard;
