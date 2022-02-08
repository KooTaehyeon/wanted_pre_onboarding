import React, { useState } from 'react';
import '../css/ClickToEdit.css';

const ClickToEdit = () => {
  const [nameCh, setNameCh] = useState('구태현');
  const [ageCh, setAgeCh] = useState('28');
  const nameBlur = (e) => {
    setNameCh(e.target.value);
  };
  const ageBlur = (e) => {
    setAgeCh(e.target.value);
  };
  return (
    <>
      <div className='name'>ClickToEdit</div>
      <form className='edit_form'>
        <div className='form_div'>
          {' '}
          <span>이름</span>
          <input className='edit_input' type='text' onBlur={nameBlur} />
        </div>
        <div className='form_div'>
          <span>나이</span>
          <input className='edit_input' type='text' onBlur={ageBlur} />
        </div>
        <div className='form_div'>
          이름<span>{nameCh}</span> 나이<span>{ageCh}</span>
        </div>
      </form>
    </>
  );
};

export default ClickToEdit;
