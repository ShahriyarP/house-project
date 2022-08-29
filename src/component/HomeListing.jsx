import HomeItem from "./HomeInfo";
import ContextProvider from "./context/ContextProvider";
import { useContext } from "react";

const HomeListing = () => {
  const { home } = useContext(ContextProvider);

  if (home !== undefined || home !== "") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 ">
        {home.map((item) => {
          return <HomeItem item={item} id={item.id} key={item.id} />;
        })}
      </div>
    );
  } else {
    alert("صفحه را مجددا بارگذاری نمایید");
  }
};

export default HomeListing;
