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
type Position = 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';

const generateFlexFlow = (flexDirection: FlexDirection, flexWrap: FlexWrap) =>
  flexDirection + ' ' + flexWrap;

type FlexFlow = ReturnType<typeof generateFlexFlow>;

export interface DivProps {
  $hasPadding?: boolean;
  $isFlex?: boolean;
  $flexFlow?: FlexFlow;
  $justifyContent?: JustifyContent;
  $alignItems?: AlignItems;
  $hasGap?: boolean;
  $background?: string;
  $position?: Position;
  $inset?: string;
  $fontMono?: boolean;
}

const Div = styled.div<DivProps>`
  ${({ $hasPadding }) =>
    $hasPadding &&
    css`
      padding: 10px 30px;

      @media (min-width: 600px) {
        padding: 15px 50px;
      }
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
  ${({ $hasGap }) =>
    $hasGap &&
    css`
      gap: 10px;

      @media (min-width: 600px) {
        gap: 15px;
      }
    `}
  ${({ $background }) =>
    $background &&
    css`
      background: ${$background};
    `}
  ${({ $position }) =>
    $position &&
    css`
      position: ${$position};
    `}
  ${({ $inset }) =>
    $inset &&
    css`
      inset: ${$inset};
    `}
  ${({ $fontMono }) =>
    $fontMono &&
    css`
      font-family: 'Roboto Mono', monospace;
    `}
`;

export default Div;
