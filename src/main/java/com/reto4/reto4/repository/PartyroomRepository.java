package com.reto4.reto4.repository;

import com.reto4.reto4.entities.Partyroom;
import com.reto4.reto4.repository.crudRepository.PartyroomCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class PartyroomRepository {
    @Autowired
    private PartyroomCrudRepository partyroomCrudRepository;

    public List<Partyroom> getAll(){
        return (List<Partyroom>) partyroomCrudRepository.findAll();
    }

    public Optional<Partyroom> getPartyroom(int id){
        return partyroomCrudRepository.findById(id);
    }
    public Partyroom save(Partyroom c){
        return partyroomCrudRepository.save(c);
    }
    public void delete(Partyroom c){
        partyroomCrudRepository.delete(c);
    }

}
