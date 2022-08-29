import ChooseCity from "./ChooseCity";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-2 py-3 xl:px-10 sm:px-5 bg-one">
      <section className="pl-2 lg:pl-8">
        <ChooseCity />
      </section>
      <section>
        <h1 className="pr-2 text-base text-white lg:pr-8 lg:text-xl sm:text-lg">
          نیازمندی های املاک دیوار
        </h1>
      </section>
    </header>
  );
};

export default Header;
