import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Container } from '../../globalStyles';
import HeaderImage from '../../images/cat.png';
import {
  Header,
  Nav,
  NavbarContainer,
  HamburgerMenu,
  NavMenu,
  NavItem,
  NavLink,
  NavLogo,
  NavIcon,
  NavItemBtn,
  NavBtnLink,
  InfoRow,
  InfoColumn,
  TextWrapper,
  HeaderInfo,
  Heading,
  Img,
  ImgWrapper,
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);
  return (
    <>
      <Header>
        <IconContext.Provider value={{ color: '#fff' }}>
          <Nav>
            <NavbarContainer>
              <NavLogo to='/'>
                <NavIcon />
                PawPet
              </NavLogo>
              <HamburgerMenu onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </HamburgerMenu>
              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <NavLink to='/'>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/'>Shop</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/'>Service</NavLink>
                </NavItem>
                <NavItemBtn>
                  {button ? (
                    <NavBtnLink to='/login'>
                      <Button primary>Login</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to='/login'>
                      <Button primary fonBig>
                        Login
                      </Button>
                    </NavBtnLink>
                  )}
                </NavItemBtn>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
        <Container>
          <HeaderInfo>
            <InfoRow>
              <InfoColumn>
                <TextWrapper>
                  <Heading>
                    Website Jual Beli Hewan dan Jasa Perawatan Hewan.
                  </Heading>
                  <Link to='/'>
                    <Button big fontBig primary>
                      Explore
                    </Button>
                  </Link>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper>
                  <Img src={HeaderImage} alt='Header Img' />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </HeaderInfo>
        </Container>
      </Header>
    </>
  );
};

export default Navbar;
