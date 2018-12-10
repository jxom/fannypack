import styled from 'reakit/styled';
import { palette } from 'styled-tools';
import Box from 'reakit/Box';

export const Row = styled(Box)`
  display: flex;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    border: 1px solid ${props => props.lineColor || palette('textTint')};
    position: absolute;
    height: 100%;
    left: 0.25rem;
    margin-top: 1.25rem;
  }

  &:last-child::before {
    border: 0;
  }
`;

export const StepBullet = styled.span`
  background-color: ${props => props.color || palette('textTint')};
  border-radius: 50%;
  display: inline-flex;
  height: 0.625rem;
  width: 0.625rem;
  margin-top: 1rem;
  margin-right: 0.5rem;
  
  ${theme('fannypack.Step.bullet.base')}
`;

export const StepLabel = styled(Box)`
  margin-top: 0.6rem;
  line-height: 1.5rem;
  
  ${theme('fannypack.Step.Label.base')}
`;
