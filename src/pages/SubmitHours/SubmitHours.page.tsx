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
  color: white;
  font-family: Verdana, serif;
  text-align: center;

`;

const Hero = styled(HeroBG)`
  width: 100%;
  height: 100%;
  align-items; center;
  justify-content: center;
`;

export const SubmitHoursPage = () => {
  return (
    <>
    <PageContainer>
      <Hero>
        <Title>Submit Hours</Title>
      </Hero>

    </PageContainer>
    </>
  );
};

export default SubmitHoursPage;
