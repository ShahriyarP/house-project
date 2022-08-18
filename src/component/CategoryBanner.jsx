import { Link } from "react-router-dom";
const CategoryBanner = () => {
  return (
    <div className="px-4 py-4 mx-8 my-8 rounded-lg rounded-br-large bg-two md:mb-6">
      <h2 className="text-lg md:text-xl xl:text-2xl">دسته بندی</h2>
      <p>
        از طریق دسته بندی های زیر می توانید سریع و بی واسطه اپارتمان مورد نظر
        خود را پیدا کنید
      </p>
      <div className="grid grid-cols-1 p-6 2xl:mx-5 sm:grid-cols-2">
        <Link
          className="grid items-center justify-center overflow-hidden"
          to="home/rent"
        >
          <img
            className="flex items-center justify-center px-4 py-2 transition-all duration-700 ease-in-out cursor-pointer hover:scale-105 w-75vw rounded-3xl max-h-52"
            src="https://images.unsplash.com/photo-1615404420216-cc423164563f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="sell_home"
          />
          <p className="py-3 text-base md:text-lg xl:text-xl">
            اجاره ی آپارتمان
          </p>
        </Link>

        <Link
          className="grid items-center justify-center overflow-hidden"
          to="home/sell"
        >
          <img
            className="flex items-center justify-center px-4 py-2 transition-all duration-700 ease-in-out cursor-pointer hover:scale-105 w-75vw rounded-3xl max-h-52"
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="sell_home"
          />
          <p className="py-3 text-base md:text-lg xl:text-xl ">خرید آپارتمان</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryBanner;
