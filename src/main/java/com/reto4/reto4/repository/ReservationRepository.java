package com.reto4.reto4.repository;

import com.reto4.reto4.entities.Category;
import com.reto4.reto4.entities.Client;
import com.reto4.reto4.entities.Reservation;
import com.reto4.reto4.entities.custom.CountClient;
import com.reto4.reto4.repository.crudRepository.ReservationCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {

    @Autowired
    private ReservationCrudRepository reservationsCrudRepository;
    public List<Reservation> getAll(){
        return (List<Reservation>) reservationsCrudRepository.findAll();
    }
    public Optional<Reservation> getReservation(int id){
        return reservationsCrudRepository.findById(id);
    }
    public Reservation save(Reservation c){
        return reservationsCrudRepository.save(c);
    }
    public void delete(Reservation c){
        reservationsCrudRepository.delete(c);
    }

    public List<Reservation> getReservationsByStatus(String status){
    return reservationsCrudRepository.findAllByStatus(status);
    }
//    public List<Reservation> getReservationPeriod(Date dateOne, Date dateTwo){
//        return reservationsCrudRepository.findAllByStartDateAfterAndStartDateBefore(dateOne,dateTwo);
//    }

    public List<CountClient> getTopClients(){
        List<CountClient> res=new ArrayList<>();

        List<Object[]> report=reservationsCrudRepository.getTotalReservationsByClient();
        for(int i=0;i<report.size();i++){
            /*
            Client cli=(Client) report.get(i)[0];
            Integer cantidad=(Integer) report.get(i)[1];
            CountClient cc=new CountClient(cantidad,cli);
            res.add(cc);
            */
            res.add(new CountClient((Long) report.get(i)[1], (Client)report.get(i)[0]));
        }
        return res;
    }
    //revisar
    public List<Reservation> getReservationPeriod(Date dateOne, Date dateTwo) {
        return reservationsCrudRepository.findAllByStartDateAfterAndStartDateBefore(dateOne,dateTwo);
    }
}