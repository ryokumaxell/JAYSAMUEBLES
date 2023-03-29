import { NavLink,Link } from "react-router-dom";

const navLinks = [
  
  { to: "/lineas", title: "LINEAS" },
  { to: "/categorias", title: "CATEGORIAS" },
  { to: "/galeria", title: "GALERIA" },
  { to: "/contacto", title: "CONTACTO" },
];

export default function Header() {
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 ">
      <div className="flex justify-between items-center px-20 pt-5 p-3 max-w-screen-xl mx-auto">
        <Link to={"/"} >
          <img className="max-w-240 w-full h-12 bg-no-repeat"
            src="https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1460082276794-1KT41KGKE5Y8KWCMU362/Logo.jpg"
            alt="LOGO JAYSA MUEBLES"
          />
        </Link>

        <nav className="flex gap-4 font-rubik font-light text-xs  tracking-[.2em]">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className="text-black hover:underline"
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
