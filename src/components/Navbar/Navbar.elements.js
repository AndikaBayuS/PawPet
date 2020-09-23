import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';
import Circle from '../../images/half-circle.svg';

// NavBar Section
export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0; ;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  text-decoration: none;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

export const NavIcon = styled(FaPaw)`
  margin-right: 0.5rem;
  font-size: 25px;
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0fd9ef;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #fff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 18px;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  @media screen and (max-width: 960px) {
    text-align: 960px;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #fff;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;
export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

// Header Section
export const Header = styled.div`
  width: auto;
  height: 0;
  padding-bottom: 50%;
  background: #e9f9fa url(${Circle}) no-repeat center center;
  background-size: cover;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    height: 100vh;
    padding-bottom: 0;
  }
`;

export const HeaderInfo = styled.div`
  padding: 80px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 960px) {
    padding-bottom: 65px;
  }
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.1;
  color: #fff;
`;
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-end;
`;

export const Img = styled.img`
  padding-right: 0;
  padding-top: 0;
  border: 0;
  display: inline-block;
  max-width: 100%;
  max-height: 500px;
  vertical-align: middle;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
