import { useState, useEffect, useContext } from "react";

import CategoryBanner from "./CategoryBanner";
import ContextProvider from "./context/ContextProvider";
import HomeItem from "./HomeItem";
import Loading from "./Loading";

const Home = () => {
  let [pageCount, setPageCount] = useState(1);
  const { getData, home, loading } = useContext(ContextProvider);

  useEffect(() => {
    getData(pageCount);
  }, [pageCount]);

  const nextPage = () => {
    setPageCount(pageCount + 1);
  };
  const previousPage = () => {
    if (pageCount <= 1) {
      pageCount = 1;
    } else {
      setPageCount(pageCount - 1);
    }
  };

  return (
    <div className="h-screen">
      {!loading && <CategoryBanner />}

      <div className="flex flex-col items-center justify-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 ">
            {home.map((item) => {
              return <HomeItem item={item} key={item.id} />;
            })}
          </div>
        )}

        {!loading && (
          <div className="flex items-end px-3 py-3">
            <button
              onClick={previousPage}
              className={
                pageCount === 1
                  ? "bg-two  rounded focus:outline-none  px-8 py-3 mx-2 text-white"
                  : " bg-one  rounded focus:outline-none  px-8 py-3 mx-2 text-white"
              }
            >
              {pageCount === 1 ? "صفحه ی اول" : "قبلی"}
            </button>
            <button
              onClick={nextPage}
              className="px-8 py-3 mx-2 text-white rounded bg-one "
            >
              بعدی
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
