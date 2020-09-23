import React from 'react';
import { Container } from '../../globalStyles';
import {
  Section,
  InfoRow,
  InfoColumn,
  Heading,
  TextWrapper,
  Subtitle,
  ImgWrapper,
  Img,
} from './InfoSection.elements';

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightSub,
  headLine,
  description,
  start,
  alt,
  img,
}) => {
  return (
    <>
      <Section lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightSub={lightSub}>{description}</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt}></Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </Section>
    </>
  );
};

export default InfoSection;
