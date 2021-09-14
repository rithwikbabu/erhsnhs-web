import { Content } from 'src/components/layout/Content';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Img } from '../Img';

export const ClearLink = styled(Link) `

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
  height: 100%;
  width: 100%;
  align-items: center;
  &:not(:first-child) {
    margin-left: 0.5rem;
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const OuterNav = styled.div`
  background-color: white;
`;

const NavContainerOuter = styled(OuterNav)`
  // position: absolute;
  top: 0;
  left: 0;
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
  top: 100px;
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
  width: 100%;
  height: 100px;
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
            <ClearLink to="/projects" style={{ marginLeft: '2rem' }}>
              Services
            </ClearLink>
            {/* <ClearLink to="/help" style={{ marginLeft: '2rem' }}>
            Help
            </ClearLink> */}
            <ClearLink to="/blog" style={{ marginLeft: '2rem' }}>
              Blog
            </ClearLink>
            <ClearLink to="/about" style={{ marginLeft: '2rem' }}>
              About
            </ClearLink>
            <ClearLink to="/contact-us" style={{ marginLeft: '2rem' }}>
              Contact Us
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