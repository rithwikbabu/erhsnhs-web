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

const Text = styled.h1`
  font-family: IBM Plex Sans Thai Looped;
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
  margin-right: 2rem;
  margin-left: 2rem;
  padding: 20px;
`;

 const Title = styled.h2`
    font-size: 45px;
    font-family: serif;
    margin-bottom: 7px;
 `;


export const HomePage = () => {
  return (
    <PageContainer>
      <Text>home</Text>
      <Hero>
        <CenterBox>
          <Title>
            National Honor Society
          </Title>
        </CenterBox>
      </Hero>
    </PageContainer>
  );
};

export default HomePage;
