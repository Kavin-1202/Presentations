package com.ust.docker_jenkin_springboot.repo;

import com.ust.docker_jenkin_springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Employeerepo extends JpaRepository<Employee,Long> {
}
