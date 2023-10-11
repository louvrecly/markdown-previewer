import { styled } from 'styled-components';

export interface FlexDivProps {
  $direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  $alignItems?: 'start' | 'end' | 'center' | 'stretch';
  $gap?: number;
}

const FlexDiv = styled.div<FlexDivProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: space-between;
  align-items: ${(props) => props.$alignItems || 'center'};
  gap: ${(props) => props.$gap || 0}px;
`;

export default FlexDiv;
