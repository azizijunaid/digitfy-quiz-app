import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Summary from './Summary';
import { QuizContext } from '../../context';
import { IQuizContext, ISummary } from '../../app.type';

const mockSummaryWithAnswers = [
    { question: 'How was your weekend overall?', answer: 'Good' },
    { question: 'How was your month overall?', answer: 'Satisfied' },
];

const mockSummaryWithoutAnswers: ISummary[] = [];

const mockContextValueWithAnswers: IQuizContext = {
    currentStep: 0,
    steps: [],
    setCurrentStep: jest.fn(),
    summary: mockSummaryWithAnswers,
    setSummary: jest.fn(),
};

const mockContextValueWithoutAnswers: IQuizContext = {
    currentStep: 0,
    steps: [],
    setCurrentStep: jest.fn(),
    summary: mockSummaryWithoutAnswers,
    setSummary: jest.fn(),
};


describe('Summary Component', () => {
    const renderSummary = (contextValue: IQuizContext) => {
        render(
            <QuizContext.Provider value={contextValue}>
                <Summary />
            </QuizContext.Provider>
        );
    };

    it('renders the Summary component correctly', () => {
        renderSummary(mockContextValueWithAnswers);

        expect(screen.getByText('Summary')).toBeInTheDocument();
    });

    it('displays the summary of answers correctly when there are answers', () => {
        renderSummary(mockContextValueWithAnswers);

        mockSummaryWithAnswers.forEach(({ question, answer }) => {
            expect(screen.getByText(question)).toBeInTheDocument();
            expect(screen.getByText(answer)).toBeInTheDocument();
        });
    });

    it('displays \'No Answers Selected\' when summary is empty', () => {
        renderSummary(mockContextValueWithoutAnswers);
        expect(screen.getByText('No Answers Selected')).toBeInTheDocument();
    });
});
