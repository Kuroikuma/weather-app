export const SearchItem = (props) => {
  const { name, handleKeyboard } = props;
  const handleSelect = () => {
    handleKeyboard(name);
  };
  return (
    <div
      onClick={handleSelect}
      className="SideBarSearchContainer__listCity__item"
    >
      <p>{name}</p>
      <p>{">"}</p>
    </div>
  );
};
