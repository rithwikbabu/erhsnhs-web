import React from 'react';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';
import { Button } from 'src/components/Button';

const PageContainer = styled(Page)`
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  font-family: Verdana, serif;
  color: white;
`;

const Title = styled.h1`
  color: white;
  font-family: Verdana, serif;
`;

export const CommitteesPage = () => {
  return (
    <>
    <PageContainer>
      <Title>Committees</Title>
    </PageContainer>
    </>
  );
};

export default CommitteesPage;
