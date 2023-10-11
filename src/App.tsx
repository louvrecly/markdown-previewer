import Layout from './components/Layout';
import HeaderBar from './components/HeaderBar';
import Body from './components/Body';

const App = () => {
  return (
    <Layout $direction="column" $alignItems="stretch">
      <HeaderBar title="Markdown Previewer" />

      <Body />
    </Layout>
  );
};

export default App;
