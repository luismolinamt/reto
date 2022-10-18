package com.reto4.reto4.controller;

import com.reto4.reto4.entities.Partyroom;
import com.reto4.reto4.service.PartyroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Partyroom")
public class PartyroomController {

    @Autowired
    private PartyroomService partyroomService;

    @GetMapping("/all")
    public List<Partyroom> getAll(){
        return partyroomService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Partyroom> getPartyroom(@PathVariable("id") int id){
        return partyroomService.getPartyroom(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Partyroom save(@RequestBody  Partyroom p){
        return partyroomService.save(p);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Partyroom update(@RequestBody Partyroom p){
        return partyroomService.update(p);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int id){
        return partyroomService.delete(id);
    }
}
