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

const Link = styled.a`

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
        <Link href="https://docs.google.com/presentation/d/10yFpQY-lBpttisdRZrIK1CivDWLjgP-Dl1Yn3XAEHII/edit?usp=sharing" target="_blank">
        <LinkButton>10/8/21</LinkButton>
        </Link>
        <Link href="https://docs.google.com/presentation/d/1MyJ-LL0-Qhry5qaDeN7Oez2vniGnRKr8cRHP69Du50I/edit?usp=sharing" target="_blank">
        <LinkButton>9/10/21</LinkButton>
        </Link>
        <Link href="https://docs.google.com/presentation/d/1fb9TRJhAFholLNkxmQnWmVUIX5ThljZKBqmN_2jD6qo/edit?usp=sharing" target="_blank">
        <LinkButton>1/17/20</LinkButton>
        </Link>
        <Link href="https://docs.google.com/presentation/d/1njQ5LHKlFm1DSmCFN1BxBej4nXlq_VPN0ch_vUkfPqo/edit?usp=sharing" target="_blank">
        <LinkButton>11/22/19</LinkButton>
        </Link>
        <Link href="https://docs.google.com/presentation/d/1yYP8u5NIrUVvyBTCMSmsXweX9g5mdMtrOocw7I13GsU/edit?usp=sharing" target="_blank">
        <LinkButton>10/25/19</LinkButton>
        </Link>
        <Link href="https://docs.google.com/presentation/d/1nTI4ut_8CsYxBTT45wbvgFxW0V8uRI1ZHc4PTFkW0ns/edit?usp=sharing" target="_blank">
        <LinkButton>9/6/19</LinkButton>
        </Link>

      </ButtonContainer>
    </PageContainer>
    </Background>


  );
};

export default DocumentsPage;
