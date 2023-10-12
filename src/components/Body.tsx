import { useState } from 'react';
import Panel from './blocks/Panel';

const Body = () => {
  const [markdown, setMarkdown] = useState('');

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.currentTarget.value);
  };

  return (
    <Panel>
      <Panel.Previewer>{markdown}</Panel.Previewer>

      <Panel.Editor onInput={handleInput} />
    </Panel>
  );
};

export default Body;
