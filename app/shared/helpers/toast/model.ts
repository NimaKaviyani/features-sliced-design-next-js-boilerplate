import {ToastOptions} from "react-toastify";

type ToastKind = 'success' | 'warning' | 'info' | 'error';

export type ToastAlertFunction = (message: string, kind?: ToastKind, options?: ToastOptions) => void;