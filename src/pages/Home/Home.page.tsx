import { Content } from 'src/components/layout/Content';
import { HeroGold } from 'src/components/layout/Hero/HeroGold';
import { Page } from 'src/components/layout/Page';

import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Img } from 'src/components/Img';

export const ClearLink = styled(Link) `
font-family: IBM Plex Sans Thai Looped;
  font-size: 1.15rem;
`;
const Hero = styled(HeroGold)`
  min-height: 30vh;
  padding: 80px 48px;
  position: relative;
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
    padding-bottom: 3rem;
  }
  align-items: center;
`;

const PageContainer = styled(Page)`
  background: var(--bg-secondary);
  background: white;
`;

const CenterBox = styled.div`
  width: 55rem;
  background-color: #E0BF5C;
  margin-right: 20px;
  margin-left: 20px;
  padding: 20px;
  padding-bottom: 39.95px;
  text-align: center;
  align-items: center;
`;

const Title = styled.h2`
  font-family: Libre Baskerville;
  font-size: 60px;
  color: #2a2a2a;
  font-weight: 500;
  margin-top: 18px;
  margin-bottom: 18px;
`;

const Subtitle = styled.text`
  flex: 2;
  font-family: montserrat;
  font-size: 19.95px;
  color: #2a2a2a; 
  margin: 0 0 19.95px; !important;
`;

const SectionContent = styled.div`
  width: 960px;
  padding: 4em 1.6em;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Spacer = styled.div`
  height: 46px;
`;

const ContentTitle = styled.h2`
  text-align: center;
  margin: 0 0 10.2px;
`;

const ContentTitleText = styled.text`
  font-size: 32px;
  font-family: Libre Baskerville;
  font-weight: 400;
`;

const MultiColDiv = styled.div`
  position: relative;
  direction: ltr;
`;

const Table = styled.table`
  position: relative;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  margin: 0 !important;
  border: 0 !important;
  padding: 0 !important;
`;

const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const Row = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const DRow = styled.td`
  width: 34.356725146199%;
  padding: 0 0px;
  vertical-align: top;
`;

const TableText = styled.text`
  text-align: center;
  font-size: 18px;
  font-family: Libre Baskerville;
`;

const TableDesc = styled.text`
  font-family: Gentium Basic;
  font-size 18px;
  font-weight: 300;
  color: #7b8c89;
`;

const WackBarThing = styled.div`
  height: 20px;
  overflow: hidden;
  width: 100%;
`;

const StyledWackBar = styled.hr`
  background-color: #eee;
  background-color: rgba(0,0,0,0.13);
  border: 0pt none;
  color: #eee;
  color: rgba(0,0,0,0.13);
  height: 1px;
  margin: 0 auto;
  text-align: center;
`;

const Paragraph = styled.div`
  margin: 0 auto 1em;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CustomText1 = styled.text`
  font-family: Libre Baskerville;
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 48px;
  color: #42514c;
`;

const CustomText2 = styled.text`
  font-family: Libre Baskerville;
  font-size: 32px;
  font-weight: 200;
  color: #42514c;
`;
export const HomePage = () => {
  return (
    <PageContainer>
      <Hero>
        <CenterBox contentCenter style={{ position: 'center', zIndex: 100 }}>
          <Title>National Honor Society</Title>
          <Subtitle>East Ridge High School Chapter</Subtitle>
        </CenterBox>
      </Hero>
      <SectionContent>
        <Spacer/>
        <ContentTitle>
          <ContentTitleText>KICKING OFF THE <ContentTitleText style={{'font-weight':"700", 'font-size':'36px'}}>2021-2022</ContentTitleText> SCHOOL YEAR</ContentTitleText>
        </ContentTitle>
        <Spacer/>
        <MultiColDiv>
          <Table>
            <Tbody>
              <Row>
                <DRow>
                  <ContentTitle>
                    <TableText>First Meeting</TableText>
                  </ContentTitle>
                  <Paragraph>
                    <TableDesc>Friday, September 10th 2021</TableDesc>
                  </Paragraph>
                  <Paragraph>
                    <TableDesc>8 am in the East Ridge Media Center</TableDesc>
                  </Paragraph>
                </DRow>
                <DRow>
                  <WackBarThing/>
                  <StyledWackBar/>
                  <WackBarThing/>
                </DRow>
                <DRow>
                  <ContentTitle>
                    <TableText>Induction Ceremony</TableText>
                  </ContentTitle>
                  <Paragraph>
                    <TableDesc>Friday, October 1st 2021</TableDesc>
                  </Paragraph>
                  <Paragraph>
                    <TableDesc>7:45 am​</TableDesc>
                  </Paragraph>
                </DRow>
              </Row>
            </Tbody>
          </Table>
        </MultiColDiv>
      </SectionContent>
      <SectionContent>
        <ContentTitle style={{'padding-bottom': '48px'}}>
          <CustomText1>The 2021-2022 application is now closed.</CustomText1>
        </ContentTitle>
        <ContentTitle>
          <CustomText2>Check back during the spring for more information on the 2022-2023 application!</CustomText2>
        </ContentTitle>
        <Spacer/>
        <Spacer/>
        <MultiColDiv>
          <Table>
            <Tbody>
              <Row>
                <DRow style={{'text-align': 'center'}}>
                  <Img
                  height="125px"
                  width="125px"
                  src="logo2.jpg"
                  alt="NHS Logo"
                  /> 
                </DRow>
                <DRow>
                  <WackBarThing/>
                  <StyledWackBar/>
                  <WackBarThing/>
                </DRow>
                <DRow style={{'text-align': 'center'}}>
                  <Img
                    height="125px"
                    width="125px"
                    src="logo1.png"
                    alt="ERHS Logo"
                  /> 
                </DRow>
              </Row>
            </Tbody>
          </Table>
        </MultiColDiv>
      </SectionContent>
    </PageContainer>
  );
};

export default HomePage;
