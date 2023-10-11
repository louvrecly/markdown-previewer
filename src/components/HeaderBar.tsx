import { useState } from 'react';
import Div from './elements/Div';
import ExpandableDiv from './elements/ExpandableDiv';
import CheatSheet from './CheatSheet';

interface HeaderBarProps {
  title: string;
}

const HeaderBar = ({ title }: HeaderBarProps) => {
  const [isCheatSheetExpanded, setIsCheatSheetExpanded] = useState(false);
  const handleToggle = () => {
    setIsCheatSheetExpanded((isExpanded) => !isExpanded);
  };

  return (
    <Div $isFlex $flexFlow="column nowrap" $alignItems="stretch">
      <Div
        $padding="10px 30px"
        $isFlex
        $flexFlow="row wrap"
        $justifyContent="space-between"
        $alignItems="stretch"
        $gap={10}
        $background="seagreen"
      >
        <h1>{title}</h1>

        <button onClick={handleToggle}>Cheat Sheet</button>
      </Div>

      <ExpandableDiv $isExpanded={isCheatSheetExpanded}>
        <CheatSheet />
      </ExpandableDiv>
    </Div>
  );
};

export default HeaderBar;
