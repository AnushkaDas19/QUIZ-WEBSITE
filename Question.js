import React from 'react';
function Question({ question, options, onAnswerOptionClick }) {
  return (
    <div className='question-section'>
      <div className='question-text'>{question}</div>
      <div className='answer-section'>
        {options.map((option, index) => (
          <button key={index} onClick={() => onAnswerOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Question;