import { useState, useEffect, useContext } from "react";

import CategoryBanner from "./CategoryBanner";
import ContextProvider from "./context/ContextProvider";
import HomeItem from "./HomeInfo";
import Loading from "./Loading";
import HomeListing from "./HomeListing";
import Footer from "./Footer";

const Home = () => {
  let [pageCount, setPageCount] = useState(1);
  const { getData, home, loading, city } = useContext(ContextProvider);
  const q = " اپارتمان";

  useEffect(() => {
    getData(city, q, pageCount);
  }, [pageCount, city]);

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
        {loading ? <Loading /> : <HomeListing />}

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
      <Footer />
    </div>
  );
};

export default Home;
