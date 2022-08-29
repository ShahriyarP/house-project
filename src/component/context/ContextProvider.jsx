import { createContext, useState } from "react";

const ContextProvider = createContext();

export const Provider = ({ children }) => {
  const [home, setHome] = useState([]);
  const [infoHome, setInfoHome] = useState({}); //HomeDetail.jsx
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("tehran"); //chooseCity.jsx

  const getData = async (city, q, pageCount) => {
    setLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_API}?token=${process.env.REACT_APP_TOKEN}&action=search&city=${city}&q=${q}&page=${pageCount}`
    );
    const { result } = await response.json();
    setHome(result);
    setLoading(false);
  };

  const getInfoHome = async (idpost) => {
    setLoading(true);

    const response = await fetch(
      `${process.env.REACT_APP_API}?token=${process.env.REACT_APP_TOKEN}&action=post&id=${idpost}`
    );
    const { result } = await response.json();

    setInfoHome((prevState) => {
      return { ...prevState }, result;
    });

    setLoading(false);
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
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextProvider;
