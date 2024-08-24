import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Slide from './Slide';
import { IQuizContext } from '../../app.type';
import { QuizContext } from '../../context';

const mockStep = {
    title: 'How was your weekend overall?',
    options: [
        { emoji: '👍', label: 'Good' },
        { emoji: '🤔', label: 'Satisfied' },
        { emoji: '👎', label: 'Bad' },
    ],
};

const mockContextValue: IQuizContext = {
    currentStep: 0,
    steps: [mockStep],
    setCurrentStep: jest.fn(),
    summary: [],
    setSummary: jest.fn(),
};


describe('Slide Component', () => {
    const renderSlide = (contextValue: IQuizContext, index: number) => {
        render(
            <QuizContext.Provider value={contextValue}>
                <Slide currentStep={contextValue.steps[0]} index={index} />
            </QuizContext.Provider>
        );
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the Slide component correctly', () => {
        renderSlide(mockContextValue, 0);

        // Verify the question is rendered
        expect(screen.getByText(mockStep.title)).toBeInTheDocument();

        // Verify all emojis are rendered
        mockStep.options.forEach(option => {
            expect(screen.getByText(option.emoji)).toBeInTheDocument();
        });
    });

    it('calls setSummary with correct arguments when an emoji is clicked', () => {
        renderSlide(mockContextValue, 0);

        const emoji = screen.getByText('👍');
        fireEvent.click(emoji);

        expect(mockContextValue.setSummary).toHaveBeenCalledWith([
            {
                question: 'How was your weekend overall?',
                answer: 'Good',
            },
        ]);
        expect(mockContextValue.setSummary).toHaveBeenCalledTimes(1);
    });

    it('highlights the selected answer correctly', () => {
        const updatedContextValue = {
            ...mockContextValue,
            summary: [
                { question: 'How was your weekend overall?', answer: 'Good' }
            ]
        };

        renderSlide(updatedContextValue, 0);

        const selectedEmoji = screen.getByText('👍');
        expect(selectedEmoji).toHaveClass('selectedAns');
    });
});
