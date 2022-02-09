import React, { useState } from 'react';
import '../css/Tag.css';

const Tag = () => {
  const [tagText, setTagText] = useState('');
  const [tagBox, setTagBox] = useState(['CodeStates', 'JJang']);

  const onChange = (e) => {
    setTagText(e.target.value);
  };

  const keyUp = (e) => {
    if (window.event.keyCode === 13) {
      // 엔터키가 눌렸을 때 실행
      setTagBox([...tagBox, tagText]);
      setTagText('');
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const removes = (e) => {
    if (e.target.innerText === 'X') {
      console.log('실행');
      e.target.parentNode.remove();
    }
  };

  return (
    <div className='tag_body'>
      <div className='name'>Tag</div>
      <form action='#' className='tag_form' onSubmit={onSubmit}>
        <label>
          <div className='input_box'>
            <div className='input_cacreate'>
              {tagBox.map((tag, i) => {
                return (
                  <div className='tag_text' key={i}>
                    {tag}
                    <div onClick={removes}>X</div>
                  </div>
                );
              })}
              <input
                type='text'
                placeholder='Press enter to add tags'
                onChange={onChange}
                onKeyUp={keyUp}
                value={tagText}
              />
            </div>
          </div>
        </label>
      </form>
    </div>
  );
};

export default Tag;
