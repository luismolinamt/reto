package com.reto4.reto4.repository;

import com.reto4.reto4.entities.Admin;
import com.reto4.reto4.repository.crudRepository.AdminCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AdminRepository {

    @Autowired
    private AdminCrudRepository adminCrudRepository;

    public List<Admin> getAll(){
        return (List<Admin>) adminCrudRepository.findAll();
    }
    public Optional<Admin> getAdmin(int id){
        return adminCrudRepository.findById(id);
    }
    public Admin save(Admin c){
        return adminCrudRepository.save(c);
    }
    public void delete(Admin c){
        adminCrudRepository.delete(c);
    }

}
