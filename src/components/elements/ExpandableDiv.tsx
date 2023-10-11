import { styled } from 'styled-components';
import Div from './Div';

export interface ExpandableDivProps {
  $isExpanded?: boolean;
}

const ExpandableDiv = styled(Div)<ExpandableDivProps>`
  height: 100%;
  transition: max-height 0.3s ease;
  max-height: ${({ $isExpanded }) => ($isExpanded ? 500 : 0)}px;
  overflow: hidden;
`;

export default ExpandableDiv;
