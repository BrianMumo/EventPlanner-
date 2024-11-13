// src/services/notificationService.js

export const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log("Notification permission granted.");
        } else {
          console.log("Notification permission denied.");
        }
      });
    }
  };
  
  export const scheduleNotification = (event, notificationTime = 1) => {
    if (Notification.permission !== 'granted') return;
  
    const now = new Date().getTime();
    const eventTime = new Date(`${event.date}T${event.time}`).getTime();
    const timeBeforeEvent = notificationTime * 60 * 60 * 1000; // Convert hours to milliseconds
    const timeUntilNotification = eventTime - timeBeforeEvent - now;
  
    if (timeUntilNotification > 0) {
      setTimeout(() => {
        new Notification(`Upcoming Event: ${event.title}`, {
          body: `Your event "${event.title}" starts in ${notificationTime} hour(s) at ${event.location}.`,
          icon: '/path/to/icon.png', // Replace with your icon path if desired
        });
      }, timeUntilNotification);
    }
  };
  