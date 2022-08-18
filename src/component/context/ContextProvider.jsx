import { createContext, useState } from "react";

const ContextProvider = createContext();

export const Provider = ({ children }) => {
  const [home, setHome] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async (pageCount) => {
    setLoading(true);
    console.log(pageCount);
    const response = await fetch(
      `https://one-api.ir/divar/?token=331759:62d676f9937d93.42051387&action=search&city=tehran&q=%D8%A7%D9%BE%D8%A7%D8%B1%D8%AA%D9%85%D8%A7%D9%86&page=${pageCount}`
    );
    const { result } = await response.json();
    //setHome(result);
    setHome((prevState) => {
      return { ...prevState }, result;
    });
    setLoading(false);
    console.log(home);
  };
  return (
    <ContextProvider.Provider value={{ home, getData, loading }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextProvider;
