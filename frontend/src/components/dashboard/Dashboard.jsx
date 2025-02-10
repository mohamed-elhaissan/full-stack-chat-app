
import LeftSide from "./leftSide";
import MiddleSide from "./middleSide";
import RightSide from "./rightSide";

const Dashboard = ()=>{
    return(
        <div className="flex">
            <LeftSide/>
            <MiddleSide/>
            <RightSide/>
        </div>
    )


}
export default Dashboard;