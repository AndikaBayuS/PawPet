import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

export const FooterContainer = styled.div`
  padding: 4rem 3rem 0 3rem;
  background-color: #253539;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const FooterHeading = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  justify-content: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px 16px 16px 0;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10;
    max-width: 100%;
  }
`;

export const FooterLinksTitle = styled.p`
  margin-bottom: 14px;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif; ;
`;

export const FooterLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;

  &hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 5px;
`;
export const Facebook = styled(FaFacebookSquare)`
  color: #fff;
  font-size: 24px;
  margin-right: 5px;
`;
export const Instagram = styled(FaInstagram)`
  color: #fff;
  font-size: 24px;
  margin-right: 5px;
`;
export const Twitter = styled(FaTwitter)`
  color: #fff;
  font-size: 24px;
  margin-right: 5px;
`;

export const WebsiteRights = styled.p`
  color: #fff;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
`;
