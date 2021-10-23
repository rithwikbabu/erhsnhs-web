import React from 'react';
import { Page } from 'src/components/layout/Page';
import styled from 'styled-components/macro';
import { Button } from 'src/components/Button';

const Background = styled.div`
  background-color: white;
`;

const PageContainer = styled(Page)`
  width: 960px;
  padding: 4em 1.6em;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: #42514C;
  margin: 0 0;
  font-size: 34px;
  font-family: libre baskerville;
  font-weight: 300;
  text-align: center;
`;

const ColoredBox = styled.div`
  clear: both;
  float: left;
  width: 100%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #f9f9f9;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  -webkit-border-top-left-radius: 0px;
  -moz-border-top-left-radius: 0px;
  border-top-left-radius: 0px;
  -webkit-border-top-right-radius: 0px;
  -moz-border-top-right-radius: 0px;
  border-top-right-radius: 0px;
  -webkit-border-bottom-left-radius: 0px;
  -moz-border-bottom-left-radius: 0px;
  border-bottom-left-radius: 0px;
  -webkit-border-bottom-right-radius: 0px;
  -moz-border-bottom-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const ButtonContainer = styled.div`
  margin: 25px;
  display: flex;
  justify-content: space-evenly;
`;

const LinkButton = styled(Button)`
  background-color: #E9CF76;
  box-shadow: 0px 0px 10px #e0bf5c;
`;

const Spacer = styled.div`
  height: 100px;
`;

const Line = styled.line`
  border-bottom: 1px solid #ccc;
  display: block;
`;

export const DocumentsPage = () => {
  return (
    
    <Background>
    <PageContainer>
      <Spacer>
      <ColoredBox>
      <Title>Meeting Powerpoints</Title>
      </ColoredBox>
      </Spacer>
      <Line></Line>
      <ButtonContainer>
        <LinkButton>10/8/21</LinkButton>
        <LinkButton>9/10/21</LinkButton>
        <LinkButton>1/17/20</LinkButton>
        <LinkButton>11/22/19</LinkButton>
        <LinkButton>10/25/19</LinkButton>
        <LinkButton>9/6/19</LinkButton>

      </ButtonContainer>
    </PageContainer>
    </Background>


  );
};

export default DocumentsPage;
