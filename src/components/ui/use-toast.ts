import { useState, useCallback } from "react";
import { nanoid } from "nanoid";

interface ToastProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  type?: "success" | "error" | "info";
  duration?: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Array<ToastProps & { id: string }>>([]);

  const addToast = useCallback((toast: ToastProps) => {
    const id = nanoid();
    setToasts(prev => [...prev, { ...toast, id }]);
    if (toast.duration !== 0) {
      setTimeout(() => removeToast(id), toast.duration || 5000);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return {
    toasts,
    toast: addToast,
    removeToast,
  };
};
