import Div from './elements/Div';

const cheatSheetItems = [
  '# H1',
  '## H2',
  '### H3',
  '**bold**',
  '*italic*',
  '[Link](http://a.com)',
  '![Image](http://url/a.png)',
  '`inline code`',
  '```block code```',
  '- list item',
];

const CheatSheet = () => {
  return (
    <Div $padding="15px 30px 0">
      <h2>Markdown Cheat Sheet</h2>

      <ul>
        {cheatSheetItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </Div>
  );
};

export default CheatSheet;
