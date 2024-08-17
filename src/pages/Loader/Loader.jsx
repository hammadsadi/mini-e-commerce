import { ImSpinner5 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ImSpinner5 className="animate-spin text-teal-600" size={35} />{" "}
    </div>
  );
};

export default Loader;
