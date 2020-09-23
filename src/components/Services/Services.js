import React from 'react';
import {
  ServicesSection,
  ServicesWrapper,
  ServicesHeading,
  ServicesContainer,
  ServicesInfo,
  ServicesTitle,
  ServicesIcon,
} from './Services.elements';

import ServicesImg01 from '../../images/services/money-bag.png';
import ServicesImg02 from '../../images/services/tools.png';
import ServicesImg03 from '../../images/services/cat.png';
import ServicesImg04 from '../../images/services/squirel.png';
import ServicesImg05 from '../../images/services/fish-tank.png';
import ServicesImg06 from '../../images/services/clown-fish.png';

const Services = () => {
  return (
    <ServicesSection>
      <ServicesWrapper>
        <ServicesHeading>
          Terdapat Dua Kegiatan Yang Dapat Dilakukan
        </ServicesHeading>
        <ServicesContainer>
          <ServicesInfo>
            <ServicesIcon src={ServicesImg01} alt='Image01'></ServicesIcon>
            <ServicesTitle>Jual Hewan</ServicesTitle>
          </ServicesInfo>
          <ServicesInfo>
            <ServicesIcon src={ServicesImg02} alt='Image02'></ServicesIcon>
            <ServicesTitle>Jasa Perawatan</ServicesTitle>
          </ServicesInfo>
        </ServicesContainer>
      </ServicesWrapper>
      <ServicesWrapper>
        <ServicesHeading>Berbagai Hewan</ServicesHeading>
        <ServicesContainer>
          <ServicesInfo>
            <ServicesIcon src={ServicesImg03} alt='Image01'></ServicesIcon>
            <ServicesTitle>Kucing</ServicesTitle>
          </ServicesInfo>
          <ServicesInfo>
            <ServicesIcon src={ServicesImg04} alt='Image01'></ServicesIcon>
            <ServicesTitle>Sugar Glider</ServicesTitle>
          </ServicesInfo>
          <ServicesInfo>
            <ServicesIcon src={ServicesImg05} alt='Image01'></ServicesIcon>
            <ServicesTitle>Aqua Scape</ServicesTitle>
          </ServicesInfo>
          <ServicesInfo>
            <ServicesIcon src={ServicesImg06} alt='Image01'></ServicesIcon>
            <ServicesTitle>Clown Fish</ServicesTitle>
          </ServicesInfo>
        </ServicesContainer>
      </ServicesWrapper>
    </ServicesSection>
  );
};

export default Services;
