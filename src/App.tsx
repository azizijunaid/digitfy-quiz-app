import { useEffect, useState } from 'react';
import { IStep, ISummary } from './app.type';
import Carousel from './components/carousel/Carousel';
import { QuizContext } from './context';
import { getSteps } from './services';

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [steps, setSteps] = useState<IStep[]>([]);
  const [summary, setSummary] = useState<ISummary[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getSteps();
      setSteps(data as IStep[]);
    }
    fetchData();
  }, []);

  return (
    <QuizContext.Provider
      value={{ summary, setSummary, currentStep, steps, setCurrentStep }}
    >
      <Carousel />
    </QuizContext.Provider>
  );
}

export default App;
