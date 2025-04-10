import { useParams } from "react-router"
import MiddleSide from "./middleSide"
import RightSide from "./rightSide"

const ChatLayout = () => {
    const {userID} = useParams()
  return (
    <div>
        <div className="flex flex-1 overflow-hidden w-screen h-screen">
            <MiddleSide userId={userID} />
            <RightSide userId={userID}/>
        </div>
    </div>
  )
}

export default ChatLayout