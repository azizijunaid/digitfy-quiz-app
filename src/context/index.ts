import { createContext } from "react";
import { IQuizContext } from "../app.type";

export const QuizContext = createContext<IQuizContext | undefined>(undefined);
