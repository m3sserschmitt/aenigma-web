import { Alert, AlertDescription } from "@/components/ui/alert";

interface ErrorAlertProps {
  message: string;
  className?: string;
}

export const ErrorAlert = ({ message, className = "mb-8" }: ErrorAlertProps) => {
  return (
    <Alert className={`border-red-500/50 bg-red-500/10 ${className}`}>
      <AlertDescription className="text-red-400">
        {message}
      </AlertDescription>
    </Alert>
  );
};