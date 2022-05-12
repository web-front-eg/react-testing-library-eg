import { useButtonColor } from './useButtonColor';

const ColorButton = () => {
  const { onClickColorChangeBtn, buttonStyle, buttonText } = useButtonColor();

  return (
    <button style={buttonStyle()} onClick={onClickColorChangeBtn}>
      {buttonText()}
    </button>
  );
};

export default ColorButton;
