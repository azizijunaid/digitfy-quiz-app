import { QuizContext } from '../../context';
import React, { useContext } from 'react';
import { IQuizContext, ISummaryProps } from '../../app.type';

const Summary: React.FC<ISummaryProps> = () => {
  const { summary } = useContext(QuizContext) as unknown as IQuizContext;;
  return (
    <>
      <div className='min-h-[135px] bg-gradient-to-r from-[#5865f2] from-10% via-sky-500 via-30% to-green-500 to-90%'>
        <h1 className='text-center text-slate-800 font-bold text-5xl mt-10'>
          Summary
        </h1>
      </div>

      <div className='flex justify-center items-center mt-20 md:mt-44'>
        <div className='bg-[#5865f2] rounded-lg shadow-lg w-[90%] md:w-1/3 text-2xl'>
          {summary.length ? (
            summary.map((r: any, index: number) => (
              <div
                key={index}
                className='flex justify-between font-light rounded-sm md:p-4 p-2 md:m-4 m-2  shadow-lg text-white'
              >
                <span>{r.question}</span>{' '}
                <span className='bg-green-400 p-2 rounded-lg text-black w-[105px] text-center'>
                  {r.answer}
                </span>
              </div>
            ))
          ) : (
            <div className='font-light rounded-sm p-4 m-4 shadow-lg text-white'>
              No Answers Selected
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Summary;
