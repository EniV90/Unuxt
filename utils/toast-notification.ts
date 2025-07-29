import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const toast = useToast();

export function successMessage(message: string) {
  toast.success(message, {
    position: "bottom-right",
    duration: 4000,
    dismissible: true,
  });
}

export function showErrorMessage(message: string) {
  toast.error(message, {
    position: "bottom-right",
    duration: 4000,
    dismissible: true,
  });
}
