import styled from 'styled-components';

export const ServicesSection = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e9f9fa;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ServicesHeading = styled.h1`
  color: #888a8a;
  font-size: 24px;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
`;

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: auto;
  }
`;

export const ServicesInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  padding: 24px;
  align-items: center;
  color: #888a8a;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 960px) {
    padding-bottom: 0;
    padding-top: 0;
    max-height: 250px;
  }
`;

export const ServicesIcon = styled.img`
  max-height: 120px;
  margin: 40px;
`;

export const ServicesTitle = styled.h3`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;
