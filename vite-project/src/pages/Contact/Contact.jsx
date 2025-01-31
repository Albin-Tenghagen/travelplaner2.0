import { NavLink, Outlet } from "react-router-dom";
import Creator from "./Creator/Creator";
import Gallery from "./Gallery/Gallery";
function Contact() {
  return (
    <>
      <nav>
        <NavLink to="creator">Creator</NavLink>
        <NavLink to="gallery">Gallery</NavLink>
      </nav>
      <p>Hejsan hoppsan välkommen hit</p>
      <Outlet />
    </>
  );
}
export default Contact;
