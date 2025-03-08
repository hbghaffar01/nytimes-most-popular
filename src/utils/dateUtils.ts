/**
 * Formats a date string into a readable format
 * @param dateString - Date string in format 'YYYY-MM-DD'
 * @returns Formatted date string (e.g., "January 1, 2023")
 */
export const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date);
    } catch (error) {
      console.error(`Error formatting date: ${dateString}`, error);
      return dateString;
    }
  };
  
  export const getRelativeTime = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffInMs = now.getTime() - date.getTime();
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
      if (diffInDays === 0) {
        return 'Today';
      } else if (diffInDays === 1) {
        return 'Yesterday';
      } else if (diffInDays < 7) {
        return `${diffInDays} days ago`;
      } else if (diffInDays < 30) {
        const weeks = Math.floor(diffInDays / 7);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
      } else {
        const months = Math.floor(diffInDays / 30);
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
      }
    } catch (error) {
      console.error(`Error calculating relative time for date: ${dateString}`, error);
      return dateString;
    }
  };