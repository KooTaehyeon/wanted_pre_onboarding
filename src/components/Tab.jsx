import React, { useEffect, useRef, useState } from 'react';
import '../css/Tab.css';

const Tab = () => {
  const tabUl = useRef(null);
  const [modNum, setModNum] = useState(0);

  useEffect(() => {
    const tabli = tabUl.current.querySelectorAll('.tab_li');
    // 선택한 tab에 bg 주고 나머지는 다시 빼주기
    let modNext = modNum + 1;
    let modPre = modNum - 1;
    if (modNext === 3) modNext = 0;
    if (modPre === -1) modPre = 2;

    tabli[modNum].style.backgroundColor = '#4902ce';
    tabli[modNext].style.backgroundColor = '';
    tabli[modPre].style.backgroundColor = '';
  }, [modNum]);
  const LiMode = [
    {
      mod: 'Tab menu ONE',
    },
    {
      mod: 'Tab menu TWO',
    },
    {
      mod: 'Tab menu THREE',
    },
  ];
  const onTab = (e) => {
    if (e.target.value === 1) {
      console.log('dha');
      setModNum(0);
    } else if (e.target.value === 2) {
      setModNum(1);
    } else if (e.target.value === 3) {
      setModNum(2);
    }
  };
  return (
    <>
      <div className='name'>Tab</div>
      <div className='tab'>
        <ul className='tab_ul' ref={tabUl} onClick={onTab}>
          <li className='tab_li' value={1}>
            Tab1
          </li>
          <li className='tab_li' value={2}>
            Tab2
          </li>
          <li className='tab_li' value={3}>
            Tab3
          </li>
        </ul>
        <div className='mod_text'>
          <span>{LiMode[modNum].mod}</span>
        </div>
      </div>
    </>
  );
};

export default Tab;
