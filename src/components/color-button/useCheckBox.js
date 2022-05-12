import { useState } from 'react';

export const useCheckBox = () => {
  const [isChecked, setChecked] = useState(false);

  const onClick = isChecked => setChecked(isChecked);
  
  return {
    state: [isChecked, setChecked],
    onClick
  };
};
