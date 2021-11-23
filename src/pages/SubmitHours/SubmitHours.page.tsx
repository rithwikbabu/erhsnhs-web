import React from 'react';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';
import { Button } from 'src/components/Button';
import { HeroBG } from 'src/components/layout/Hero/HeroBG';

const PageContainer = styled(Page)`
  align-items: center;
  justify-content: center;
  font-family: Verdana, serif;
  color: white;
`;

const Title = styled.h1`
  color: black;
  font-family: Verdana, serif;
  text-align: center;
`;

const Hero = styled(HeroBG)`
  width: 100%;
  height: 100%;
  align-items; center;
  justify-content: center;
`;

const Banner = styled.div`
  width: 900px;;
`;

const BannerContainer = styled.div`
padding: 4em 1.6em;
vertical-align: middle;
display: table-cell;
`;

export const SubmitHoursPage = () => {
  return (
    <>
    <PageContainer>
      <Hero>
        <Banner>
        <BannerContainer>
          <Title>Submit Hours</Title>
        </BannerContainer>
        </Banner>
      </Hero>

    </PageContainer>
    </>
  );
};

export default SubmitHoursPage;
