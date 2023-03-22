import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff !important;
 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const Header_Inner = styled.div`
  display: flex;
  padding-top: 10px;
  box-sizing: border-box;
  padding-left: 75px;
  padding-right: 75px;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  max-width: 240px;
  width: 100%;
  height: 50px;
  background-image: url("https://images.squarespace-cdn.com/content/v1/54263706e4b0e2d40dd9f6d4/1460082276794-1KT41KGKE5Y8KWCMU362/Logo.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Nav = styled.nav`
  font-family: Rubik;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  letter-spacing: 0.2em;

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 0 0.618em;
  padding: 0.618em 0;
`;

const navLinks = [
  
  { to: "/homework", title: "HOMEWORK" },
  { to: "/lineas", title: "LINEAS" },
  { to: "/categorias", title: "CATEGORIAS" },
  { to: "/galeria", title: "GALERIA" },
  { to: "/contacto", title: "CONTACTO" },
];

export default function Header() {
  return (
    <HeaderContainer>
      <Header_Inner>
        <Logo/>
        <Nav>
          {navLinks.map((link, index) => (
            <StyledNavLink key={index} to={link.to}>
              {link.title}
            </StyledNavLink>
          ))}
        </Nav>
      </Header_Inner>
    </HeaderContainer>
  );
}

