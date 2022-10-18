package com.reto4.reto4.repository.crudRepository;

import com.reto4.reto4.entities.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface ReservationCrudRepository extends CrudRepository<Reservation,Integer> {

    //JPQL
    @Query("SELECT c.client, COUNT(c.client) FROM Reservation AS c group by c.client order by COUNT(c.client) desc")
    public List<Object[]> getTotalReservationsByClient();
    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date dateOne,Date dateTwo);
    public List<Reservation> findAllByStatus(String status);

}