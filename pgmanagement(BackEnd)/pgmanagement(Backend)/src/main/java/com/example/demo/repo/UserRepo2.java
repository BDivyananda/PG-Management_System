package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.SignUpUser;

@Repository
public interface UserRepo2 extends JpaRepository<SignUpUser, Integer> {

}