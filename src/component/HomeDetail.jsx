import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import ContextProvider from "./context/ContextProvider";
import Loading from "./Loading";
import TitleHomeDetail from "./TitleHomeDetail";

const HomeDetail = () => {
  const {
    getInfoHome,
    infoHome: { data, widgets },
    loading,
  } = useContext(ContextProvider);
  const { id } = useParams();

  useEffect(() => {
    getInfoHome(id);
  }, [id]);

  /* return <div>{console.log(infoHome.data.seo.description)}</div>; 
  {console.log(data.seo.thumbnail)}
  */

  return (
    <div className="max-w-screen-lg mx-auto my-6 ">
      {/*  {loading && <TitleHomeDetail data={infoHome} />} */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className=" sm:grid sm:grid-cols-2">
            <div className="flex items-center justify-center">
              <img
                className="w-2/3 shadow-md rounded-xl"
                src={data.seo.thumbnail}
                alt=""
              />
            </div>
            <div className="flex flex-col px-3 py-4 text-right sm:py-0 sm:mx-4">
              <h2 className="text-xl font-semibold tracking-wider lg:text-2xl">
                {data.seo.title}
              </h2>
              <h2 className="py-2 text-lg text-gray-700">
                {widgets.header.subtitle}
              </h2>
              <section>
                <h3 className="pt-4 text-xl sm:text-2xl">:امکانات</h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 ">
                  {widgets.list_data.map((e) => (
                    <div>
                      <h4>:{e.title}</h4>
                      <h4>{e.value}</h4>
                      <br></br>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
          <section className="w-4/5 h-2 py-2 mx-auto shadow-xl lg:w-full rounded-2xl bg-slate-100"></section>
          <div className="mx-5 my-2 sm:my-10">
            <section className=" text-end">
              <h3 className="py-3 text-lg md:text-2xl">:توضیحات</h3>
              <p className="text-xl leading-relaxed sm:leading-extra-loose">
                {data.description}
              </p>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeDetail;
