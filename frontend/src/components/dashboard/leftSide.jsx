import useravatar from "../../assets/../../public/useravatar.svg";
const LeftSide = () => {
  return (
    <div className="w-[20%]  p-4 shadow-lg rounded-lg ">
      <div className="flex items-center gap-2">
        <img src={useravatar} className="w-10 h-10 rounded-full" alt="" />
        <div>
          <h2 className="text-lg font-bold">{window.localStorage.getItem("userName")}</h2>
          <p className="text-sm">{window.localStorage.getItem("userEmail")}</p>
        </div>
        
      </div>
    </div>
  );
};
export default LeftSide;
