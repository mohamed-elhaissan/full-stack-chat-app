/* eslint-disable react/prop-types */
const MiddleSide = ({userId}) => {
    return (
        <div className="bg-[#F8FAFC] w-[60%]">
            {userId ? <div className="text-2xl text-center">Chat with {userId}</div> : <div className="text-2xl text-center">Select a user to chat</div>}
        </div>
    )
};
export default MiddleSide;
