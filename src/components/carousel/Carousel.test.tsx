import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from './Carousel';
import { IQuizContext } from '../../app.type';
import { QuizContext } from '../../context';

const mockSteps = [
    { title: "Step 1", options: [{ emoji: "👍", label: "Good" }] },
    { title: "Step 2", options: [{ emoji: "🤔", label: "Satisfied" }] },
];

const mockContextValue: IQuizContext = {
    currentStep: 0,
    steps: mockSteps,
    setCurrentStep: jest.fn(() => mockContextValue.currentStep + 1),
    summary: [],
    setSummary: jest.fn(),
};

const renderCarousel = (contextValue: IQuizContext) => {
    render(<QuizContext.Provider value={contextValue}>
        <Carousel />
    </QuizContext.Provider>);
};
fdescribe('Carousel Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('renders without crashing', () => {
        renderCarousel(mockContextValue);
        expect(screen.getByText('Step 1')).toBeInTheDocument();
    });

    it('renders the correct number of steps', () => {
        renderCarousel(mockContextValue);
        expect(screen.getAllByText(/Step/)).toHaveLength(mockSteps.length);
    });

    it('navigates to the next step on "Next" button click', () => {
        mockContextValue['summary'] = [{ question: 'test 1', 'answer': 'answer 1' }];
        renderCarousel(mockContextValue);
        const nextButton = screen.getByText('Next');
        fireEvent.click(nextButton);
        expect(mockContextValue.setCurrentStep).toHaveBeenCalledWith(1);
    });

    it('disables "Next" button if summary[currentStep] is missing', () => {
        mockContextValue['summary'] = [];
        renderCarousel(mockContextValue);
        const nextButton = screen.getByText('Next');
        expect(nextButton).toBeDisabled();
    });

    it('navigates to the previous step on "Back" button click', () => {
        renderCarousel({ ...mockContextValue, currentStep: 1 });
        const backButton = screen.getByText('Back');
        fireEvent.click(backButton);
        expect(mockContextValue.setCurrentStep).toHaveBeenCalledWith(0);
    });
});