export function sendCustomAnalyticsEvent(eventName) {
  if (window.umami && typeof window.umami === 'function') {
    window.umami(eventName);
  }
}
