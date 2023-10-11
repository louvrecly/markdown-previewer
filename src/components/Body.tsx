import Panel from './blocks/Panel';

const Body = () => {
  return (
    <Panel $alignItems="stretch" $gap={10}>
      <Panel.Editor />

      <Panel.Previewer>Previewer</Panel.Previewer>
    </Panel>
  );
};

export default Body;
