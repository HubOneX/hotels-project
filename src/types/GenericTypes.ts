import { Dispatch, SetStateAction } from "react";

export type DispatchSetState<T> = Dispatch<SetStateAction<T>>;

export type Nullable<T> = T | null;
