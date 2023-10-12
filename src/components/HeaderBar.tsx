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
    <Div $position="relative">
      <Div
        $padding="15px 30px"
        $isFlex
        $flexFlow="row wrap"
        $justifyContent="space-between"
        $alignItems="stretch"
        $gap={15}
        $background="dodgerblue"
      >
        <h1>{title}</h1>

        <button onClick={handleToggle}>Cheat Sheet</button>
      </Div>

      <ExpandableDiv
        $isExpanded={isCheatSheetExpanded}
        $background="rgba(0, 0, 0, 0.3)"
        $position="absolute"
        $inset="100% 0 auto"
      >
        <CheatSheet />
      </ExpandableDiv>
    </Div>
  );
};

export default HeaderBar;
