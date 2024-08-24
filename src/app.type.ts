type options = {
  emoji: string;
  label: string;
};

export interface IStep {
  title: string;
  options: options[];
}

export interface ISummary {
  question: string;
  answer: string;
}

export interface IQuizContext {
  currentStep: number;
  steps: IStep[];
  setCurrentStep: (step: number) => void;
  summary: ISummary[];
  setSummary: (summary: any) => void;
}

export interface ISummaryProps {
  style?: React.CSSProperties;
}

export interface ISlide {
  currentStep: IStep;
  index: number;
}
