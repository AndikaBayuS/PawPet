import React from 'react';
import {
  FooterContainer,
  FooterHeading,
  FooterLinks,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLinksWrapper,
  WebsiteRights,
  SocialLogo,
  Facebook,
  Twitter,
  Instagram,
} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeading>Informasi PawPet.</FooterHeading>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinksTitle>Hubungi Kami</FooterLinksTitle>
            <FooterLinks>Cara Kerja</FooterLinks>
            <FooterLinks>Laporkan Akun</FooterLinks>
            <FooterLinks>Term of Service</FooterLinks>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Tentang Kami</FooterLinksTitle>
            <FooterLinks>Contact</FooterLinks>
            <FooterLinks>Support</FooterLinks>
            <FooterLinks>Sponsorship</FooterLinks>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Ikuti Kami</FooterLinksTitle>
            <SocialLogo>
              <Facebook to='/' />
              Facebook
            </SocialLogo>
            <SocialLogo>
              <Instagram to='/' />
              Instagram
            </SocialLogo>
            <SocialLogo>
              <Twitter to='/' />
              Twitter
            </SocialLogo>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <WebsiteRights>PawPet © 2020</WebsiteRights>
    </FooterContainer>
  );
};

export default Footer;
