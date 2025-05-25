// Frontend constants.js
// Dynamically determine the API endpoint based on environment
const getAPIBaseURL = () => {
    // Check if we're in production by looking at the hostname
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;
    
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        // Local development
        return "http://localhost:8080/api/v1";
    } else {
        // Production - use the same protocol and hostname as the frontend
        // Apache reverse proxy will handle the routing to port 8080
        return `${protocol}//${hostname}/api/v1`;
    }
};

const BASE_API_URL = getAPIBaseURL();

export const USER_API_END_POINT = `${BASE_API_URL}/user`;
export const TWEET_API_END_POINT = `${BASE_API_URL}/tweet`;

// Helper function to get the base URL for static assets (images, uploads)
export const getBaseURL = () => {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;
    
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return "http://localhost:8080";
    } else {
        return `${protocol}//${hostname}`;
    }
};

export const timeSince = (timestamp) => {
    let time = Date.parse(timestamp);
    let now = Date.now();
    let secondsPast = (now - time) / 1000;
    let suffix = 'ago';

    let intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    for (let i in intervals) {
        let interval = intervals[i];
        if (secondsPast >= interval) {
            let count = Math.floor(secondsPast / interval);
            return `${count} ${i} ${count > 1 ? 's' : ''} ${suffix}`;
        }
    }
    
    return 'just now';
}
