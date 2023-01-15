import type { FC } from 'react';

import { KeyCodes } from '../../constants/KeyCodes';

/* 
WAI-ARIA source https://www.w3.org/WAI/ARIA/apg/example-index/switch/switch-checkbox.html
Do I need a group of Switches?
1.Do I need a value?
2.Should I use these ideas? https://www.w3.org/WAI/ARIA/apg/example-index/switch/js/switch-checkbox.js
3.What would onChange do in this component? Save state?
4. How do I write a pr...
5. Smth defining keyboard navigation
*/

export interface SwitchProps {
  id: string;
  label: string;
  value: string;
  positiveState: string;
  negativeState: string;
  isOpen?: boolean; // change to mandatory later
  onChange: (id: string, value: string) => void; // value or state?
  // checked state var?
}

export const Switch: FC<SwitchProps> = ({
  id,
  label,
  value,
  positiveState,
  negativeState,
  isOpen, // do smth with this one?
  onChange,
}) => (
  // aria-checked => isOpen: true : false
  <div className="some-main-class">
    <label htmlFor={id}>
      <span className="label">{label}</span>
      <input
        id={id}
        type="checkbox"
        role="switch"
        onChange={() => onChange(id, value)}
      />
      <span className="state">
        <span className="container">
          <span className="position" />
        </span>
        <span className="on" aria-hidden="true">
          {positiveState}
        </span>
        <span className="off" aria-hidden="true">
          {negativeState}
        </span>
      </span>
    </label>
  </div>
);
