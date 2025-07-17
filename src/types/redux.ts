export interface StatusAsyncThunkI<I = undefined> {
    status: "idle" | "loading" | "succeeded" | "failed",
    error: null | string
    payload?: I
    errors?: string[]
}