import { styled } from 'styled-components';
import Div from './Div';

export interface ExpandableDivProps {
  $isExpanded?: boolean;
}

const ExpandableDiv = styled(Div)<ExpandableDivProps>`
  transition: max-height 0.3s ease;
  max-height: ${({ $isExpanded }) => ($isExpanded ? 100 : 0)}vh;
  overflow: hidden;
`;

export default ExpandableDiv;
