package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Event;
import com.examly.springapp.repository.EventRepository;

@Service
public class EventService {

    @Autowired
    EventRepository er;

    public Event createEvent(Event e) {
        return er.save(e);
    }

    public List<Event> getAllEvents() {
        return er.findAll();
    }

    public Event rsvpToEvent(Long id, String attendee) {
        Event event = er.findById(id).orElse(null);
        if(event != null){
            event.getAttendees().add(attendee);
            return er.save(event);
        }
        return null;
    }
}
