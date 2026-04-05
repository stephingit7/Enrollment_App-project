// Mock API functions
export const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Try to get events from localStorage, or use default mock data
      const storedEvents = localStorage.getItem('virtualEvents');
      const events = storedEvents ? JSON.parse(storedEvents) : [
        {
          id: 1,
          title: "AI Conference",
          description: "Future of AI",
          dateTime: "2025-08-15T10:00:00",
          organizerName: "John",
          eventLink: "https://zoom.us/test",
          attendees: ["Alice"]
        }
      ];
      resolve({ data: events });
    }, 100);
  });
};

export const createEvent = (eventData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Get existing events
      const storedEvents = localStorage.getItem('virtualEvents');
      const events = storedEvents ? JSON.parse(storedEvents) : [];
      
      // Create new event with unique ID
      const newEvent = {
        ...eventData,
        id: Date.now(), // Simple unique ID
        attendees: eventData.attendees || []
      };
      
      // Add to events array
      events.push(newEvent);
      
      // Save to localStorage
      localStorage.setItem('virtualEvents', JSON.stringify(events));
      
      resolve({ data: newEvent });
    }, 100);
  });
};

export const rsvpToEvent = (eventId, attendeeName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Get existing events
      const storedEvents = localStorage.getItem('virtualEvents');
      const events = storedEvents ? JSON.parse(storedEvents) : [];
      
      // Find the event and add attendee
      const updatedEvents = events.map(event => {
        if (event.id === eventId) {
          // Check if attendee already exists
          if (!event.attendees.includes(attendeeName)) {
            return {
              ...event,
              attendees: [...event.attendees, attendeeName]
            };
          }
        }
        return event;
      });
      
      // Save to localStorage
      localStorage.setItem('virtualEvents', JSON.stringify(updatedEvents));
      
      // Find and return the updated event
      const updatedEvent = updatedEvents.find(event => event.id === eventId);
      resolve({ data: updatedEvent });
    }, 100);
  });
};