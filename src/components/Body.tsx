import { useState } from 'react';
import Panel from './blocks/Panel';

const Body = () => {
  const [markdown, setMarkdown] = useState('');

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.currentTarget.value);
  };

  return (
    <Panel $padding="15px 30px" $isFlex $alignItems="stretch" $gap={15}>
      <Panel.Editor onInput={handleInput} />

      <Panel.Previewer>{markdown}</Panel.Previewer>
    </Panel>
  );
};

export default Body;
