import { toast, ToastOptions } from "react-toastify";
import { ToastAlertFunction } from "@shared/helpers/toast/model";

const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 7000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored"
};

const toastAlert: ToastAlertFunction = (message, kind = "info", options) =>
  toast[kind](message, { ...defaultOptions, ...options });

export default toastAlert;
