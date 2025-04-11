/* eslint-disable react/prop-types */
const RightSide = ({userId}) => {
    return (
        <div className=" bg-white flex-1">
            <div className="text-2xl text-center">Chat with {userId}</div>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="w-full h-full bg-gray-100 rounded-lg shadow-md p-4">
                    <p className="text-gray-700">Chat messages will appear here.</p>
                </div>
            </div>
        </div>
    )
}
export default RightSide;
