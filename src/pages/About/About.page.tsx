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

const Spacer = styled.div`
  height: 50px;
`;

const Title = styled.h2`
  color: #42514C;
  margin: 0 0;
  font-size: 34px;
  font-family: libre baskerville;
  font-weight: 300;
`;

const ColoredBox = styled.div`
  clear: both;
  float: left;
  width: 100%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #e0bf5c;
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

const Paragraph = styled.div`
  text-align:left;
  display:block;

`;

const StyledText = styled.p`
  font-family: Gentium Basic;
  color: #7B8C89;
  line-height: 200%;
`;

const TableDiv = styled.div`
  position: relative;
  direction: ltr;
`;

const TableWrap = styled.div`
  margin: 0 -15px;
`;

const TableTable = styled.table`
  position: relative;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  margin: 0 !important;
  border: 0 !important;
  padding: 0 !important;
`;

const TableTbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const TableRow = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const TableData = styled.td`
  width: 16.666666666667%;
  padding: 0 15px;
`;

const TableBox = styled.div`

`;

const TableTitle = styled.h4`
  font-family: Gentium Basic;
  font-size: 18px;
  color: #2a2a2a;
  letter-spacing: .5px;
  text-align: center;
`;

const TableSubtitle = styled.h4`
  font-family: Gentium Basic;
  font-size 18px;
  color: #7B8C89;
  font-weight: 400;
  text-align: center;
  margin-top:0;
`;

export const AboutPage = () => {
  return (
    <Background>
      <PageContainer>
        <Spacer/>
        <ColoredBox>
          <Title>About Us</Title>
        </ColoredBox>
        <Spacer/>
        <Paragraph>
        <StyledText>
          In the NHS, we are dedicated to giving back to the community what it has given to us. Through hard work, dedication, and commitment, we aim to provide a better community for those in it.
        </StyledText>
        <br/>
        <br/>
        <StyledText>
        NHS Applicants range from sophomores to seniors, who submit their application in spring of the school year. The NHS will accept applicants with excellent academic and social qualifications, after careful review by a five-member faculty council. If selected, NHS inductees will be invited to an inaugural ceremony in fall of the forthcoming school year, and officially be a part of the National Honor Society.
        </StyledText>
        <br/>
        <br/>
        <StyledText>
        If you are interested in applying, see the application information above.
        </StyledText>
        </Paragraph>
        <Spacer/>
        <ColoredBox>
          <Title>Partnerships</Title>
        </ColoredBox>
        <Spacer/>
        <StyledText>
          The NHS takes part in a variety of community service and community outreach programs.
        </StyledText>
        <br/>
        <br/>
        <StyledText>
          Four times a year, the East Ridge NHS and Student Council partner with the American Red Cross to host school-wide blood drives, where generous donors can help saves the lives of thousands of patients nationwide. 
        </StyledText>
        <Spacer/>
        <Title style={{'font-size':'30px'}}>2021-2022 Board Members</Title>
        <TableDiv>
          <TableWrap>
            <TableTable>
              <TableTbody>
                <TableRow>
                  <TableData>
                    <TableBox>
                      <TableTitle>Lisa Hamernick</TableTitle>
                      <TableSubtitle>Advisor</TableSubtitle>
                    </TableBox>
                  </TableData>
                  <TableData>
                    <TableBox>
                      <TableTitle>Jihoon Yoo</TableTitle>
                      <TableSubtitle>President</TableSubtitle>
                    </TableBox>
                  </TableData>
                  <TableData>
                    <TableBox>
                      <TableTitle>Caleb Moon</TableTitle>
                      <TableSubtitle>Vice President</TableSubtitle>
                    </TableBox>
                  </TableData>
                  <TableData>
                    <TableBox>
                      <TableTitle>Nate Lee</TableTitle>
                      <TableSubtitle>Secretary</TableSubtitle>
                    </TableBox>
                  </TableData>
                  <TableData>
                    <TableBox>
                      <TableTitle>Irene Kurian</TableTitle>
                      <TableSubtitle>Treasurer</TableSubtitle>
                    </TableBox>
                  </TableData>
                  <TableData>
                    <TableBox>
                      <TableTitle>Phuong Dao</TableTitle>
                      <TableSubtitle>Webmaster</TableSubtitle>
                    </TableBox>
                  </TableData>
                </TableRow>
              </TableTbody>
            </TableTable>
          </TableWrap>
        </TableDiv>
      </PageContainer>
    </Background>
  );
};

export default AboutPage;
