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
  $background?: string;
}

const Div = styled.div<DivProps>`
  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `}
  ${({ $padding }) =>
    $padding &&
    css`
      padding: ${$padding};
    `}
  ${({ $isFlex }) =>
    $isFlex &&
    css`
      display: flex;
    `}
  ${({ $flexFlow }) =>
    $flexFlow &&
    css`
      flex-flow: ${$flexFlow};
    `}
  ${({ $justifyContent }) =>
    $justifyContent &&
    css`
      justify-content: ${$justifyContent};
    `}
  ${({ $alignItems }) =>
    $alignItems &&
    css`
      align-items: ${$alignItems};
    `}
  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap}px;
    `}
  ${({ $background }) =>
    $background &&
    css`
      background: ${$background};
    `}
`;

export default Div;
