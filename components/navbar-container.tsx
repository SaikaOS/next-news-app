import Navbar from "./navbar";

const NavbarContainer = () => {
  const links = ['Health', 'Politic' ,'Sports', 'Science', 'Tech', 'Business', 'Weather']
  return (
    <div className="flex justify-center items-center w-full">
      <Navbar links={["Popular"]} />
      <Navbar links={links} />
    </div>
  );
};

export default NavbarContainer;
