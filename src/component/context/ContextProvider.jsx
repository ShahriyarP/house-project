import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContextProvider = createContext();

export const Provider = ({ children }) => {
  const [home, setHome] = useState([]);
  const [infoHome, setInfoHome] = useState({}); //HomeDetail.jsx
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("tehran"); //chooseCity.jsx

  const getData = async (city, pageCount) => {
    setLoading(true);
    const response = await fetch(
      `https://one-api.ir/divar/?token=331759:62d676f9937d93.42051387&action=search&city=${city}&q=%D8%A7%D9%BE%D8%A7%D8%B1%D8%AA%D9%85%D8%A7%D9%86&page=${pageCount}`
    );
    const { result } = await response.json();
    setHome(result);
    /* setHome((prevState) => {
      return { ...prevState }, result;
    }); */
    setLoading(false);
  };

  const getInfoHome = async (idpost) => {
    console.log(idpost);
    setLoading(true);

    const response = await fetch(
      `https://one-api.ir/divar/?token=331759:62d676f9937d93.42051387&action=post&id=${idpost}`
    );
    const { result } = await response.json();

    setInfoHome((prevState) => {
      return { ...prevState }, result;
    });

    setLoading(false);
    console.log(result);
  };

  return (
    <ContextProvider.Provider
      value={{
        home,
        getData,
        loading,
        setCity,
        city,
        getInfoHome,
        infoHome,
        ToastContainer,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextProvider;
