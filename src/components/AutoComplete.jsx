import React, { useEffect, useState } from 'react';
import '../css/AutoComplete.css';
const AutoComplete = () => {
  // 더미 데이터
  const data = ['refurbished', 'antique', '중고A급', 'vintage'];
  data.sort(); // 문자 정렬

  const [inputText, setInputText] = useState(false); //input 값 있는지 확인해주는 상태 값
  const [inputValue, setInputValue] = useState(''); // input 값 상태
  const [options, setOption] = useState(); // input 값과 자동완성기능 값 을 비교하는 상태값

  useEffect(() => {
    if (inputValue === '') {
      setInputText(false);
      setOption([]);
    }
    if (inputValue !== '') {
      // input에값이 있을떄
      setOption(
        data.filter((item) => {
          // 입력값이있으면 데이터더미 걸러주기
          item = item.toLowerCase(); // 입력 받을시 대소문자 구별해주기
          return item.includes(inputValue.toLowerCase());
        })
      );
    }
  }, [inputValue]);

  const onChange = (e) => {
    // input값 바꿔주는 이벤트
    setInputValue(e.target.value);
    setInputText(true);
  };

  // 자동완성 드롭다운
  const DropDown = () => {
    return (
      <>
        {options.map((itme, idx) => {
          return (
            <li key={idx} onClick={handleDropDownClick}>
              {itme}
            </li>
          );
        })}
      </>
    );
  };
  const handleDropDownClick = (e) => {
    //DropDown 컴포넌트의 li엘리먼트에서 onClick으로 이벤트 핸들러 함수에 option을 전달해주고 있다.
    setInputValue(e.target.innerText); //전달받은 option으로 inputValue를 변경해준다.
  };

  const textRemove = () => {
    // input 값 지우는 이벤트
    setInputValue('');
  };

  return (
    <div className='auto_body'>
      <div className='name'>AutoComplete</div>
      <form action='' className='auto_form'>
        <input type='text' onChange={onChange} value={inputValue} />
        <span onClick={textRemove}>x</span>

        {inputText === false ? null : (
          <ul className='ul_drop'>
            {' '}
            <DropDown />
          </ul>
        )}
      </form>
    </div>
  );
};

export default AutoComplete;
