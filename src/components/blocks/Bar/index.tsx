import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IStyledComponent, styled } from 'styled-components';
import Title from './Title';
import Button from './Button';
import FlexDiv from '../../elements/FlexDiv';

interface BarBlock
  extends IStyledComponent<
    'web',
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  > {
  Title: IStyledComponent<
    'web',
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  >;
  Button: IStyledComponent<
    'web',
    DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >;
}

const Bar: BarBlock = styled(FlexDiv)`
  padding: 10px 30px;
  background-color: mediumseagreen;
`;

Bar.Title = Title;
Bar.Button = Button;

export default Bar;
