import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Page } from 'src/components/Page';
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

export const HomePage = () => {
  return (
    <PageContainer>
      <Text>home</Text>
    </PageContainer>
  );
};

export default HomePage;
