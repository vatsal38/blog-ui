import { toast } from "react-toastify";

export const notify = {
  success(msg: string) {
    toast(msg, { type: "success" });
  },
  warning(msg: string) {
    toast(msg, { type: "warning" });
  },
  info(msg: string) {
    toast(msg, { type: "info" });
  },
  error(msg: string) {
    toast(msg, { type: "error" });
  },
  toast(msg: string, variant: any = "default") {
    toast(msg, { type: variant });
  },
};
