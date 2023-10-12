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
        $hasPadding
        $isFlex
        $flexFlow="row wrap"
        $justifyContent="space-between"
        $alignItems="stretch"
        $hasGap
        $background="dodgerblue"
      >
        <h1>{title}</h1>

        <button onClick={handleToggle}>Cheat Sheet</button>
      </Div>

      <ExpandableDiv
        $isExpanded={isCheatSheetExpanded}
        $background="rgba(0, 0, 0, 0.7)"
        $position="absolute"
        $inset="100% 0 auto"
      >
        <CheatSheet />
      </ExpandableDiv>
    </Div>
  );
};

export default HeaderBar;
