import { Content } from 'src/components/layout/Content';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Img } from '../Img';

export const ClearLink = styled(Link) `
  font-family: montserrat;
  font-weight: 400;
  font-size: 11px;
  color: #8e8e8e;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 10px 14px; !important;
`;

export const ImgLink = styled(ClearLink)`
`;

const Logo = styled(Img)`
`;

const LogoMobile = styled(Img)`
  height: 25px;
  fill: var(--text-primary);
`;

const NavSection = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  align-items: top;
  justify-content center;
  margin: 0 42.5px;
  padding: 0 0 40px;
`;

const OuterNav = styled.div`
  background-color: white;
`;

const NavContainerOuter = styled(OuterNav)`
  position: relative;
  top: 0px;
  left: 0;
  vertical-align: top;
  width: 100%;
  height: auto;
  z-index: 10;
  background: #white;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  border-bottom: 1px solid #1a1613);
`;

const MobileNavContainerOuter = styled(OuterNav)`
  position: absolute;
  top: 147px;
  left: 0;
  width: 85vw;
  height: auto;
  z-index: 10;
  background: #1a161300;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  border-bottom: 1px solid #1a1613);
`;

const ContainerMobile = styled(MobileNavContainerOuter)`
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
  }
  img {
    height: 25px;
  }
`;

export type NavBarType = {};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: top;
  width: 100%;
  height: auto;
  align-items: center;
`;

const Header = styled.div`
  background-color: white;
  padding-top: 52px;
  padding-bottom: 25px;
  text-align: center;
`;

const NavLogo: React.FC<NavBarType> = (props) => {
  return (
    <Header>
      <ImgLink to='/' aria-label="Home page">
        <Logo
          width="59px"
          height="70px"
          src="nhslogo.png"
        />
      </ImgLink>
    </Header>
  );
}

export const NavBar: React.FC<NavBarType> = (props) => {
  return (
    <>
      <NavLogo/>
      <NavContainerOuter>
        <NavContainer>
          <NavSection>
            <ClearLink to="/about">
              About
            </ClearLink>
            <ClearLink to="/submit-hours">
              Submit Hours
            </ClearLink>
            <ClearLink to="/events">
              Events
            </ClearLink>
            <ClearLink to="/tutoring">
              Tutoring
            </ClearLink>
            <ClearLink to="/committees">
              Committees
            </ClearLink>
            <ClearLink to="/announcements">
              Announcements
            </ClearLink>
            <ClearLink to="/documents">
              Documents
            </ClearLink>
            <ClearLink to="/photo-gallery">
              Photo Gallery
            </ClearLink>
          </NavSection>
        </NavContainer>
      </NavContainerOuter>

      <ContainerMobile>
        <NavContainer>
          <ClearLink to='/' aria-label="Home page" style={{ marginLeft: '-1rem' }}>
            <LogoMobile
                height="30px"
                width="100px"
                src="nhslogo.png"
                alt="NHS Logo"
              />
          </ClearLink>
          <NavSection>
            <ClearLink to="/projects" style={{ marginLeft: '1rem' }}>
              Services
            </ClearLink>
            {/* <ClearLink to="/help" style={{ marginLeft: '1rem' }}>
              Help
            </ClearLink> */}
            <ClearLink to="/blog" style={{ marginLeft: '1rem' }}>
              Blog
            </ClearLink>
            <ClearLink  to="/about" style={{ marginLeft: '1rem' }}>
              About
            </ClearLink>
            <ClearLink to="/contact-us" style={{ marginLeft: '2rem' }}>
              Contact&nbsp;Us
            </ClearLink>
          </NavSection>
        </NavContainer>
      </ContainerMobile>
    </>
  );
}