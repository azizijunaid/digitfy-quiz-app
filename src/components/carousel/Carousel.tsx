import React, { FC, useContext } from 'react';
import './carousel.css';
import Summary from '../summary/Summary';
import Slide from '../slide/Slide';
import { QuizContext } from '../../context';
import { IQuizContext, IStep } from '../../app.type';

const Carousel: FC = () => {
  const { currentStep, steps, setCurrentStep, summary } =
    useContext(QuizContext) as unknown as IQuizContext;

  const cssProps = (currentStep: number): React.CSSProperties => ({
    transform: `translateY(-${currentStep * 100}%)`,
  });

  return (
    <div className='carousel'>
      <div
        className='carousel-inner'
        style={cssProps(currentStep)}
      >
        {steps.map((step: IStep, index: number) => (
          <Slide currentStep={step} key={index} index={index} />
        ))}
        <Summary style={cssProps(currentStep)} />
      </div>

      {currentStep !== steps.length && (
        <div className='carousel-dots'>
          {steps.map((_: any, idx: number) => (
            <span
              key={idx}
              className={`dot ${idx === currentStep ? 'active' : ''}`}
              onClick={() => setCurrentStep(idx)}
            ></span>
          ))}
        </div>
      )}
      <div className='navigation'>
        {currentStep > 0 && (
          <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
        )}
        {currentStep !== steps.length && (
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={!summary[currentStep]}
            className='disabled:bg-gray-500'
            name='Next'
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Carousel;
