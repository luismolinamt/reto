package com.reto4.reto4.controller;

import com.reto4.reto4.entities.Reservation;
import com.reto4.reto4.entities.custom.CountClient;
import com.reto4.reto4.entities.custom.DescriptionAmount;
import com.reto4.reto4.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("/all")
    public List<Reservation> getAll(){
        return reservationService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Reservation> getReservation(@PathVariable("id") int id){
        return reservationService.getReservation(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation save(@RequestBody Reservation p){
        return reservationService.save(p);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation update(@RequestBody Reservation p){
        return reservationService.update(p);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int id){
        return reservationService.delete(id);
    }

    //reto 5

    @GetMapping("/report-status")
    public DescriptionAmount getReservationDescriptionStatus(){
    return reservationService.getStatusReport();
    }
    @GetMapping("/report-clients")
    public List<CountClient> getCountClient(){
        return reservationService.getTopClients();
    }

    @GetMapping("/report-dates/{dateOne}/{dateTwo}")
    public List<Reservation> getDateReport(@PathVariable("dateOne")String d1, @PathVariable("dateTwo")String d2){
        return reservationService.getReservationPeriod(d1,d2);

    }
}
