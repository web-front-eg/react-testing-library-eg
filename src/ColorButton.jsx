import { useButtonColor } from './useButtonColor';

const ColorButton = () => {
  const { onClick, style, text } = useButtonColor();

  return (
    <>
      <button style={style()} onClick={onClick}>
        {text()}
      </button>
      <input type='checkbox' />
    </>
  );
};

export default ColorButton;
