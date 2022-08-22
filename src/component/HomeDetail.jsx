import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import Loading from "./Loading";
import TitleHomeDetail from "./TitleHomeDetail";
import ShowHomeImage from "./ShowHomeImage";
import ModalImage from "react-modal-image";
import location_black from "../asset/images/location_black.svg";
import "../index.css";

const HomeDetail = () => {
  const {
    getInfoHome,
    infoHome: { data, widgets },
    loading,
    ToastContainer,
  } = useContext(ContextProvider);
  const { id } = useParams();

  useEffect(() => {
    getInfoHome(id);
  }, [id]);

  /* return <div>{console.log(infoHome.data.seo.description)}</div>; 
  {console.log(data.seo.thumbnail)}
  */

  /* return <ShowHomeImage source={widgets.header.thumbnail} />; */
  /* console.log(widgets.header.thumbnail); */

  /*   hideDownload={true}
    hideZoom={true}
    className="modal-image"
  />; */

  return (
    <div className="max-w-screen-lg mx-auto my-6 ">
      {/*  {loading && <TitleHomeDetail data={infoHome} />} */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className=" sm:grid sm:grid-cols-2">
            <div className="flex items-center justify-center w-4/5">
              <div className="w-4/5">
                <ModalImage
                  className="w-full shadow-md cursor-pointer rounded-xl"
                  small={[widgets.header.thumbnail]}
                  large={widgets.header.thumbnail}
                  alt={data.seo.title}
                />
              </div>
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
                <div className="grid grid-cols-2 px-3 lg:grid-cols-3 ">
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

          {/* width line */}
          <section className="w-4/5 h-2 py-2 mx-auto shadow-xl lg:w-full rounded-2xl bg-slate-100"></section>
          {/* width line */}
          <div className="mx-5 my-2 sm:my-10">
            <section className=" text-end">
              <h3 className="py-3 text-lg md:text-2xl">:توضیحات</h3>
              <p className="text-xl leading-relaxed sm:leading-extra-loose">
                {data.description}
              </p>
            </section>
          </div>

          {/* //loacation && link divar  */}
          <div className="grid flex-row-reverse max-w-screen-lg px-4 my-4 md:grid-cols-3 justify-items-center">
            <div className="flex items-center justify-end py-2">
              <h3>{data.city}</h3>
              <h3 className="px-1"> در </h3>
              <h3>{widgets.header.place}</h3>
              <img src={location_black} alt="" />
            </div>
            <div className="flex items-center justify-end">
              <h3 className="whitespace-nowrap">{data.category.title}</h3>
              <h3 className="pl-2"> :در دسته بندی</h3>
            </div>
            <section>
              <div className="px-6 py-3 my-2 transition-all duration-300 border shadow-xl cursor-pointer hover:scale-105 rounded-3xl bg-one ">
                <a
                  className="text-white"
                  href={data.share.web_url}
                  target="_blank"
                >
                  <h2>بازدید آگهی در دیوار</h2>
                </a>
              </div>
            </section>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default HomeDetail;
