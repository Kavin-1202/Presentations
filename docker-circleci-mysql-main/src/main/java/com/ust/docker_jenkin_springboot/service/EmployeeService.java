package com.ust.docker_jenkin_springboot.service;

import com.ust.docker_jenkin_springboot.model.Employee;
import com.ust.docker_jenkin_springboot.repo.Employeerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeService {
    @Autowired
    private Employeerepo repo;
    public Employee getEmployeeById(Long id) {
        return repo.findById(id).get();
    }

    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    public Employee addEmployee(Employee employee) {
        return repo.save(employee);
    }
}
