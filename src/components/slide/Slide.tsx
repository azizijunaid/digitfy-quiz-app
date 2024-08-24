import React, { FC, useContext } from 'react';
import './slide.css';
import { QuizContext } from '../../context';
import { IQuizContext, ISlide } from '../../app.type';

const Slide: FC<ISlide> = ({ currentStep, index }) => {
  const { summary, setSummary } = useContext(QuizContext) as unknown as IQuizContext;
  const onSelectAnswer = (ques: string, ans: string) => {
    const updatedSummary = [...summary];
    updatedSummary[index] = {
      question: ques,
      answer: ans,
    };
    setSummary(updatedSummary);
  };

  return (
    <div className='carousel-item'>
      <div className='carousel-content'>
        <div className='question'>
          <h2 className='text-[35px] md:text-[50px] lg:text-[50px] font-bold drop-shadow-lg'>{currentStep.title}</h2>
          <div className='absolute -z-1  md:text-[1000px] text-[300px] opacity-5 shadow-lg font-bold'>
            {index + 1}
          </div>
          {/* <pre>{JSON.stringify(selectedAnswer[index], null, 2)}</pre> */}
        </div>
        <div className='emojis'>
          {currentStep.options.map(({ emoji, label }, idx) => (
            <span
              key={idx}
              className={`emoji tooltip fade ${summary.length && summary[index]?.answer === label
                ? 'selectedAns shadow-lg'
                : ''
                }`}
              data-title={label}
              onClick={() =>
                onSelectAnswer(
                  currentStep.title,
                  currentStep.options[idx].label,
                )
              }
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide;
