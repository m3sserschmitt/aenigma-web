import { format } from "date-fns";

/**
 * Format a date string to explicit format like "June 2nd 2025"
 */
export const formatDate = (dateString: string | null): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return format(date, "MMMM do yyyy");
};