/**
 * Checks if a given timestamp is within regular market hours (9:30 AM - 4:00 PM ET)
 */
export function isWithinMarketHours(timestamp: number): boolean {
    // Create date from timestamp (which is in seconds)
    const date = new Date(timestamp * 1000);

    // Get the ET date by applying the timezone offset
    const etParts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    }).formatToParts(date);

    // Extract time components
    const hours = parseInt(etParts.find(part => part.type === 'hour')?.value || '0');
    const minutes = parseInt(etParts.find(part => part.type === 'minute')?.value || '0');

    // Get day of week in ET
    const etDay = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        weekday: 'long',
    }).format(date);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days.indexOf(etDay);

    // Check if it's a weekday (1-5, Monday-Friday)
    const isWeekday = day >= 1 && day <= 5;

    if (!isWeekday) {
        return false;
    }

    // Market hours: 9:30 AM - 4:00 PM ET
    const timeInMinutes = hours * 60 + minutes;
    const marketOpenMinutes = 9 * 60 + 30; // 9:30 AM
    const marketCloseMinutes = 16 * 60; // 4:00 PM

    return timeInMinutes >= marketOpenMinutes && timeInMinutes < marketCloseMinutes;
}
