// just a sample type I took from a project I'm working on
export type QueryData<T = any> = Record<string, T> | Array<Record<string, T>> | null | undefined;
