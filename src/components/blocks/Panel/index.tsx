import {
  DetailedHTMLProps,
  HTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { IStyledComponent, styled } from 'styled-components';
import { Options } from 'react-markdown';
import Div, { DivProps } from '../../elements/Div';
import Editor from './Editor';
import Previewer from './Previewer';

interface PanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    DivProps {}

interface PanelBlock extends IStyledComponent<'web', PanelProps> {
  Editor: IStyledComponent<
    'web',
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >
  >;
  Previewer: IStyledComponent<'web', Readonly<Options>> &
    ((options: Readonly<Options>) => JSX.Element);
}

const Panel: PanelBlock = styled(Div)`
  padding: 15px 30px;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  gap: 15px;

  @media (min-width: 600px) {
    flex-flow: row-reverse nowrap;
  }
`;

Panel.Editor = Editor;
Panel.Previewer = Previewer;

export default Panel;
