/**
 * Format a date string to localized date format
 */
export const formatDate = (dateString: string | null): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString();
};