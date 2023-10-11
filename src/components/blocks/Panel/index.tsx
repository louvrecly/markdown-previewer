import {
  DetailedHTMLProps,
  HTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { IStyledComponent, styled } from 'styled-components';
import FlexDiv, { FlexDivProps } from '../../elements/FlexDiv';
import Editor from './Editor';
import Previewer from './Previewer';

interface PanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    FlexDivProps {}

interface PanelBlock extends IStyledComponent<'web', PanelProps> {
  Editor: IStyledComponent<
    'web',
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >
  >;
  Previewer: IStyledComponent<
    'web',
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  >;
}

const Panel: PanelBlock = styled(FlexDiv)`
  margin: 10px;
  flex: 1;
`;

Panel.Editor = Editor;
Panel.Previewer = Previewer;

export default Panel;
