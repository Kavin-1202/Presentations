package com.ust.docker_jenkin_springboot.controller;

import com.ust.docker_jenkin_springboot.model.Employee;
import com.ust.docker_jenkin_springboot.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService service;
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return service.getEmployeeById(id);
    }
    @GetMapping()
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }
    @PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee employee) {
        return service.addEmployee(employee);
    }
}
