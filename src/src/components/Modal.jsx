import React, { useState } from 'react';
import '../css/Model.css';

const Modal = () => {
  const [Models, setModels] = useState(false);
  const OpenClose = () => {
    if (Models === false) {
      setModels(true);
      document.body.style.overflow = 'hidden';
    } else {
      setModels(false);
      document.body.style.overflow = 'auto';
    }
  };
  return (
    <>
      <div className='name'>Modal</div>
      <button className='model_btn' onClick={OpenClose}>
        {' '}
        Open Modal
      </button>
      {Models === true ? (
        <>
          <div className='model'></div>
          <div className='model_box'>
            <div className='model_text'> HELLO CODESTARES! </div>
            <div className='model_close' onClick={OpenClose}>
              X
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
