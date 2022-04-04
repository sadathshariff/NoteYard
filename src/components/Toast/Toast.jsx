import { toast } from "react-toastify";
export const Toast = (toastText, toastTheme) => {
  const notify = () => {
    toast[toastTheme](toastText, {
      position: "top-right",
      autoClose: 1000,
      theme: "dark",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  notify();
};
