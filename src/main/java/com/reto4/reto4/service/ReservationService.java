package com.reto4.reto4.service;

import com.reto4.reto4.entities.Reservation;
import com.reto4.reto4.entities.custom.CountClient;
import com.reto4.reto4.entities.custom.DescriptionAmount;
import com.reto4.reto4.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll() {
        return reservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return reservationRepository.getReservation(id);
    }

    public Reservation save(Reservation p) {
        if (p.getIdReservation() == null) {
            return reservationRepository.save(p);
        } else {
            Optional<Reservation> e = reservationRepository.getReservation(p.getIdReservation());
            if (e.isPresent()) {
                return p;
            } else {
                return reservationRepository.save(p);
            }
        }
    }

    public Reservation update(Reservation p) {
        if (p.getIdReservation() != null) {
            Optional<Reservation> q = reservationRepository.getReservation(p.getIdReservation());
            if (q.isPresent()) {
                if (p.getStartDate() != null) {
                    q.get().setStartDate(p.getStartDate());
                }
                if (p.getDevolutionDate() != null) {
                    q.get().setDevolutionDate(p.getDevolutionDate());
                }
                if (p.getStatus() != null) {
                    q.get().setStatus(p.getStatus());
                }
                reservationRepository.save(q.get());
                return q.get();
            } else {
                return p;
            }
        } else {
            return p;
        }
    }

    public boolean delete(int id) {
        boolean flag = false;
        Optional<Reservation> p = reservationRepository.getReservation(id);
        if (p.isPresent()) {
            reservationRepository.delete(p.get());
            flag = true;
        }
        return flag;

    }

    public List<CountClient> getTopClients() {
        return reservationRepository.getTopClients();
    }

    public DescriptionAmount getStatusReport() {
        List<Reservation> completed = reservationRepository.getReservationsByStatus("completed");
        List<Reservation> cancelled = reservationRepository.getReservationsByStatus("cancelled");
        int cantidadCompletadas=completed.size();
        int cantidadCanceladas=cancelled.size();

        //DescriptionAmount descAmt = new DescriptionAmount(completed.size(), cancelled.size());
        // return descAmt;
        return new DescriptionAmount((long) cantidadCompletadas,(long) cantidadCanceladas);


    }

    public List<Reservation> getReservationPeriod(String d1, String d2) {

        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd");
        Date dateOne = new Date();
        Date dateTwo = new Date();
        try {
            dateOne = parser.parse(d1);
            dateTwo = parser.parse(d2);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        if (dateOne.before(dateTwo)) {
            return reservationRepository.getReservationPeriod(dateOne, dateTwo);
        } else {
            return new ArrayList<>();
        }
    }
}
