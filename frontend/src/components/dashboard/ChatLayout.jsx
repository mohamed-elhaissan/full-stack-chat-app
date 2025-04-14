import { useParams } from "react-router";
import MiddleSide from "./middleSide";

const ChatLayout = () => {
  const { userID } = useParams();
  return (
    <div>
      <div className="flex   overflow-hidden  h-screen">
        <MiddleSide userId={userID} />
      </div>
    </div>
  );
};

export default ChatLayout;
