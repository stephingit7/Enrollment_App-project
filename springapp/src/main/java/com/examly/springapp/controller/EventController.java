package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.Event;
import com.examly.springapp.service.EventService;
import org.springframework.web.bind.annotation.CrossOrigin;



@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = {"https://localhost:8081","https://8081-babbefdaebeedbacabfbbcecaeadeffceaaecaa.premiumproject.examly.io"})
public class EventController {
    @Autowired
    EventService es;

    @PostMapping
    public Event createEvent(@RequestBody Event e){
        return es.createEvent(e);
    }

    @GetMapping
    public List<Event> getAllEvents(){
        return es.getAllEvents();
    }


    @PostMapping("/{id}/rsvp")
    public Event rsvpToEvent(@PathVariable Long id, @RequestParam String attendee){
        return es.rsvpToEvent(id,attendee);
    }
}
