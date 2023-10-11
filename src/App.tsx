import Layout from './components/Layout';
import HeaderBar from './components/HeaderBar';
import Body from './components/Body';

const App = () => {
  return (
    <Layout $isFlex $flexFlow="column nowrap" $alignItems="stretch">
      <HeaderBar title="Markdown Previewer" />

      <Body />
    </Layout>
  );
};

export default App;
