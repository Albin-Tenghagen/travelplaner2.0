import Navbar from "./NavBar";

const Header = React.memo(function Header() {
  return (
    <header className="Header">
      <h1 className="Logo">Resans Planerings Portal</h1>
      <Navbar />
    </header>
  );
});

export default Header;
