package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.SignUpUser;
import com.example.demo.model.User;
import com.example.demo.repo.UserRepo;
import com.example.demo.repo.UserRepo2;

@RestController
@RequestMapping@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserRepo repo;
	
	@Autowired
	private UserRepo2 repo2;
	
	
	@PostMapping("/user")
	public ResponseEntity<User>loginRegister(@RequestBody User user) {
		
		System.out.println("Data is stored into the database");
		return ResponseEntity.ok(repo.save(user));
		
	}
	
	@PostMapping("/user2")
	public ResponseEntity<SignUpUser>signUpRegister(@RequestBody SignUpUser user2) {
		
		System.out.println("Data is stored into the database");
		return ResponseEntity.ok(repo2.save(user2));
		
	}
	
	
	
}