import ContextProvider from "./context/ContextProvider";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

const Listing = () => {
  const param = useParams();
  return (
    <div className="flex items-center justify-center mt-12">
      <section className="flex items-center justify-end">
        {param.categoryName === "rent" ? (
          <>
            <h1>موردی برای اجاره ی آپارتمان وجود ندارد</h1>
          </>
        ) : (
          <h1>موردی برای خرید آپارتمان وجود ندارد</h1>
        )}
      </section>
    </div>
  );
};

export default Listing;
