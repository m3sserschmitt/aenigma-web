import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  message?: string;
  className?: string;
}

export const LoadingSpinner = ({ message, className = "py-20" }: LoadingSpinnerProps) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Loader2 className="h-8 w-8 text-appPrimary animate-spin" />
      {message && <span className="ml-2 text-appOnSurface">{message}</span>}
    </div>
  );
};