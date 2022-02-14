import React, { useState } from 'react';
import '../css/ClickToEdit.css';

const ClickToEdit = () => {
  // Blur결과값
  const [name, setName] = useState('구태현');
  const [age, setAge] = useState(28);
  //  input 값 바꿔주는 상태값
  const [nameCh, setNameCh] = useState(name);
  const [ageCh, setAgeCh] = useState(age);
  // 결과값에 바꿔줄 텍스트를 받아줄 이벤트
  const nameChange = (e) => {
    setNameCh(e.target.value);
  };
  const ageChange = (e) => {
    setAgeCh(e.target.value);
  };
  //blur 이벤트
  const nameBlur = (e) => {
    setName(nameCh);
  };
  const ageBlur = (e) => {
    setAge(ageCh);
  };
  return (
    <>
      <div className='name'>ClickToEdit</div>
      <form className='edit_form'>
        <div className='form_div'>
          <span>이름</span>
          <input
            className='edit_input'
            type='text'
            value={nameCh}
            onBlur={nameBlur}
            onChange={nameChange}
          />
        </div>
        <div className='form_div'>
          <span>나이</span>
          <input
            className='edit_input'
            type='text'
            value={ageCh}
            onBlur={ageBlur}
            onChange={ageChange}
          />
        </div>{' '}
        <div className='form_div'>
          이름:<span>{name}</span> 나이:<span>{age}</span>
        </div>
      </form>
    </>
  );
};

export default ClickToEdit;
