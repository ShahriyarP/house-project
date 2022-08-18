import { Link } from "react-router-dom";

const HomeItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between mx-4 my-2 border-gray-400 h-130px bg-three rounded-2xl">
      <div className="flex items-center justify-center w-full">
        <h2 className="p-2 text-center break-all xl:text-lg lg:text-base sm:text-sm">
          {item.title}
        </h2>
      </div>

      <img
        width="170px"
        className="float-right h-130px rounded-tr-2xl rounded-br-2xl "
        src={item.image}
        alt="home_image"
      />
    </div>
  );
};

export default HomeItem;
