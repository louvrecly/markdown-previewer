import { useState } from 'react';
import Panel from './blocks/Panel';

const PLACEHOLDER = 'Start typing here # Hello World!';

const Body = () => {
  const [markdown, setMarkdown] = useState('');

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.currentTarget.value);
  };

  return (
    <Panel $hasPadding $isFlex $alignItems="stretch" $hasGap>
      <Panel.Previewer>{markdown}</Panel.Previewer>

      <Panel.Editor placeholder={PLACEHOLDER} onInput={handleInput} />
    </Panel>
  );
};

export default Body;
