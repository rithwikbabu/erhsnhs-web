import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Page } from 'src/components/Page';
import { HeroGold } from 'src/components/Hero/HeroGold';

export const ClearLink = styled(Link) `
font-family: IBM Plex Sans Thai Looped;
  font-size: 1.15rem;
`;

const PageContainer = styled(Page)`
  background: var(--bg-secondary);
`;

const Hero = styled(HeroGold)`
  min-height: 40vh;
  padding-top: 10rem;
  padding-bottom: 11rem;
  position: relative;
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
    padding-bottom: 3rem;
  }
`;

const CenterBox = styled.div`
  background-color: #E0BF5C;
  margin-right: 20px;
  margin-left: 20px;
  padding: 20px;
  text-align: center;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 45px;
  font-weight: 550;
  font-family: serif;
  color: #2a2a2a;
`;

const Subtitle = styled.text`
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
  font-size: 15px;
  font-family: Courier New;
  color: #2a2a2a;
`;

const TextContainer = styled.div`
  
`;


export const HomePage = () => {
  return (
    <PageContainer>
      yo
      <Hero>
        <CenterBox>
          <TextContainer>
            <Title>
              National Honor Society
            </Title>
            <Subtitle>
              East Ridge High School Chapter
            </Subtitle>
          </TextContainer>
        </CenterBox>
      </Hero>
    </PageContainer>
  );
};

export default HomePage;
