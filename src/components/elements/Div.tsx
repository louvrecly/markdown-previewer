import { css, styled } from 'styled-components';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type AlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'start'
  | 'end'
  | 'baseline';

const generateFlexFlow = (flexDirection: FlexDirection, flexWrap: FlexWrap) =>
  flexDirection + ' ' + flexWrap;

type FlexFlow = ReturnType<typeof generateFlexFlow>;

export interface DivProps {
  $margin?: string;
  $padding?: string;
  $isFlex?: boolean;
  $flexFlow?: FlexFlow;
  $justifyContent?: JustifyContent;
  $alignItems?: AlignItems;
  $gap?: number;
}

const Div = styled.div<DivProps>`
  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}
  ${(props) =>
    props.$isFlex &&
    css`
      display: flex;
    `}
  ${(props) =>
    props.$flexFlow &&
    css`
      flex-flow: ${props.$flexFlow};
    `}
  ${(props) =>
    props.$justifyContent &&
    css`
      justify-content: ${props.$justifyContent};
    `}
  ${(props) =>
    props.$alignItems &&
    css`
      align-items: ${props.$alignItems};
    `}
  ${(props) =>
    props.$gap &&
    css`
      gap: ${props.$gap}px;
    `}
`;

export default Div;
