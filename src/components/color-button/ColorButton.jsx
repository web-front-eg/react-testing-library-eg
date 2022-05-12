import { useButtonColor } from './useButtonColor';
import { useCheckBox } from './useCheckBox';

const ColorButton = () => {
  const { onClick: onClickChangeColorButton, style, text } = useButtonColor();
  const {
    state: [isChecked],
    onClick: onClickCheckbox
  } = useCheckBox();

  return (
    <>
      <button
        style={{ color: 'white', ...style() }}
        onClick={onClickChangeColorButton}
        disabled={isChecked}
      >
        {text()}
      </button>
      <input
        type='checkbox'
        defaultChecked={isChecked}
        aria-checked={isChecked}
        onChange={e => onClickCheckbox(e.target.checked)}
      />
    </>
  );
};

export default ColorButton;
