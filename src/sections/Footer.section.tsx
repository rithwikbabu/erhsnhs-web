import { Link } from 'react-router-dom';
import { Content } from 'src/components/layout/Content';
import styled from 'styled-components/macro';

import {
  FaDiscord,
  FaTelegram,
  FaReddit,
  FaTwitter,
  FaMedium,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';
import React from 'react';
import { Spacer } from 'src/components/layout/Spacer';
import {
  MEDIUM_LINK,
  REDDIT_LINK,
  TWITTER_LINK,
} from 'src/constants';
import { LinkOut } from 'src/components/LinkOut';
import { Img } from 'src/components/Img';

const ClearLink = styled(Link) `
  font-family: IBM Plex Sans Thai Looped;
  text-decoration: none;
  font-size: .925rem;
`;

const Content2 = styled(Content)`
  @media screen and (max-width: 780px) {
  }
`;

const Footer = styled.footer`
  background: white;
  padding-top: 5rem;
  // padding-bottom: 5rem;
  color: var(--text-secondary);
  a {
    font-family: IBM Plex Sans Thai Looped;
    color: #77869e;
    display: block;
    padding: 0.6rem 0;
    &:hover {
      color: var(--text-on-bg);
      text-decoration: none;
    }
  }
`;

const FSectionTitle = styled.h3`
  color: var(--text-on-bg);
  border-bottom: 1px solid #ececec;
  font-size: .925rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  line-height: 35px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 780px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

const Section = styled.div`
  min-width: 200px;
  width: 1px;
  flex-grow: 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const FooterEnd = styled.div`
  margin-top: 2rem;
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  & > * {
    margin-top: 1.5rem;
  }
  @media screen and (max-width: 780px) {
    padding-right: 1rem;
    padding-left: 1rem;
    width: 90%;
  }
`;

const FooterCompany = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  svg {
    height: 30px;
    width: 30px;
  }
  & > * {
    margin-left: 1rem;
  }
`;

const HelpText = styled.p`
  margin-top: 0.3rem;
  font-size: 0.875rem;
`;

export const FooterSection = () => {
  return (
    <Footer>
      <Content2>
        <SectionContainer>
          <Section>
            <FSectionTitle>{'Contact'}</FSectionTitle>
            <ClearLink to="/">eastridgenhs@gmail.com</ClearLink>
          </Section>
          <Section>
            <FSectionTitle>{'Advisor Contact'}</FSectionTitle>
            <ClearLink to="/">Lisa Hamernick</ClearLink>
            <ClearLink to="/">lhamerni@sowashco.org</ClearLink>
            <ClearLink to="/">651-425-2413</ClearLink>
          </Section>
          <Section>
            <FSectionTitle>{'Quick Links'}</FSectionTitle>
            <ClearLink to="/">Apply</ClearLink>
            <ClearLink to="/">Submit Hours</ClearLink>
            <ClearLink to="/">Tutor</ClearLink>
            <ClearLink to="/">Learn More</ClearLink>
          </Section>
        </SectionContainer>
        <FooterEnd>
          <FooterCompany>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <ClearLink to="/">{'ERHS NHS 2021'}</ClearLink>
            </div>
          </FooterCompany>
          <SocialIcons>
            <LinkOut aria-label="Instagram" href={REDDIT_LINK}>
              <FaInstagram />
            </LinkOut>
            <LinkOut aria-label="Discord" href={TWITTER_LINK}>
              <FaDiscord />
            </LinkOut>
          </SocialIcons>
        </FooterEnd>
      </Content2>
    </Footer>
  );
};