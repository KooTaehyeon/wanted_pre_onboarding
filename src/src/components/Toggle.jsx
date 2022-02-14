import React, { useState } from 'react';
import '../css/Toggle.css';
const Toggle = () => {
  const [text, setText] = useState('OFF');
  const onText = (e) => {
    if (e.target.checked) {
      setText('ON');
    } else {
      setText('OFF');
    }
  };
  return (
    <div className='toggle_body'>
      <div className='name'>Toggle</div>
      <div className='toggle'>
        <label className='switch-button' onClick={onText}>
          <input type='checkbox' />
          <span className='switch_bg'></span>
        </label>
        <div className='toggle_content'>Toggle Switch {text}</div>
      </div>
    </div>
  );
};

export default Toggle;
