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
  flex: 1;
`;

Panel.Editor = Editor;
Panel.Previewer = Previewer;

export default Panel;
