import React from 'react';
import { Img } from 'src/components/Img';
import styled from 'styled-components';

const Hero = styled.div`
  padding-bottom: 3rem;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 3rem;
    color: var(--text-on-bg);
  }
  p {
    color: var(--text-on-bg);
  }
  position: relative;
  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Bgg = styled(Img)`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 150%;
  width: 100%;
  z-index: 0;
`;

export const HeroBG: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <Hero className={className}>
      {children}
      <Bgg src="/illustrations/newbg.jpg" alt="bgg" />
    </Hero>
  );
};