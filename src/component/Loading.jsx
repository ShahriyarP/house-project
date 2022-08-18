import loading from "../asset/images/loading.gif";
const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <img width="150px" src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
