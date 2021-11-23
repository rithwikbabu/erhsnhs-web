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

const BoldText = styled.span`
  color: #2a2a2a;
  font-family: Montserrat;  
  font-weight: 900;
  font-size: 19.95px;
`;

const Text = styled.span`
  color: #2a2a2a;
  font-family: Montserrat;  
  font-size: 19.95px;
`;

const Hero = styled(HeroBG)`
  width: 100%;
  height: 100%;
`;

const Banner = styled.div`
  width: 900px;
  margin: 0 auto;
`;

const BannerContainer = styled.div`
  padding: 4em 1.6em;
  vertical-align: middle;
  display: table-cell;
  margin: 0 auto;
`;

const SiteElements = styled.div`
  width: 900px;
  height: 100%;
  background-color: #f8eaa9;
  text-align: center;
`;

const Break = styled.br`
line-height: 40px;
`;  
export const SubmitHoursPage = () => {
  return (
    <>
    <PageContainer>
      <Hero>
        <Banner>
          <BannerContainer>
            <SiteElements>
              <br/>
              <br/>
              <BoldText>​PLEASE READ BEFORE SUBMITTING HOURS:</BoldText>
              <Break/>
              <Text>The submission form is now fixed.</Text>
              <br/>
              <Text>Thank you for your patience!</Text>
              <br/>
              <br/>
              <BoldText>​THINGS TO NOTE:</BoldText>
            </SiteElements>
          </BannerContainer>
        </Banner>
      </Hero>

    </PageContainer>
    </>
  );
};

export default SubmitHoursPage;
