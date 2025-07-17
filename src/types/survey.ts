import { StatusAsyncThunkI } from "./redux";

export interface InitialStateSurvey {
    getStatusSurvey: StatusAsyncThunkI
    statusSurvey: statusSurveyI | null
    sendAnswersSurvey: StatusAsyncThunkI
    sendAnswersSurveyOnboarding: StatusAsyncThunkI
    getStatusSurveyOnboarding: StatusAsyncThunkI
    statusSurveyOnboarding: boolean | null
    sendAnswerForAssignLevel: StatusAsyncThunkI
}

export interface SurveyTemplateI {
    pregunta: string,
    respuestas: (string | number)[],
    multiple?: boolean,
    maxSelectable?: number
    renderInputText?: boolean
    canSpecifyOther?: boolean
    indexOfBlock?: number
}

export interface statusSurveyI {
    status: number,
    error: string
}

export interface SurveyFormI {
    t1_envios: Record<string, string | number | (string | number)[]>
    others?: Record<string, string | number>
}