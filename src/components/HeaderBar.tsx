import Bar from './blocks/Bar';

interface HeaderBarProps {
  title: string;
}

const HeaderBar = ({ title }: HeaderBarProps) => {
  return (
    <Bar>
      <Bar.Title>{title}</Bar.Title>

      <Bar.Button>Cheat Sheet</Bar.Button>
    </Bar>
  );
};

export default HeaderBar;
