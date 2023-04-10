package com.fscalculator.demo;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/calculations")
public class CalculationController {
    @Autowired
    private CalculationService calculationService;
    @Autowired
    private CalculationRepository calculationRepository;
    @GetMapping
    public ResponseEntity<List<Calculation>> getAllCalculations(){
        return new ResponseEntity<List<Calculation>>(calculationService.AllCalculations(), HttpStatus.OK);
    }
    @PostMapping("/add")
    public Calculation add(@RequestBody Calculation calculation){
        calculation.setResults(calculation.getOperand1() + calculation.getOperand2());
        calculation.setOperator("+");
        return calculationRepository.save(calculation);
    }
    @PostMapping("/subtraction")
    public Calculation subtraction(@RequestBody Calculation calculation){
        calculation.setResults(calculation.getOperand1() - calculation.getOperand2());
        calculation.setOperator("-");
        return calculationRepository.save(calculation);
    }
    @PostMapping("/multiplication")
    public Calculation multiplication(@RequestBody Calculation calculation){
        calculation.setResults(calculation.getOperand1() * calculation.getOperand2());
        calculation.setOperator("*");
        return calculationRepository.save(calculation);
    }
    @PostMapping("/division")
    public Calculation division(@RequestBody Calculation calculation){
        calculation.setResults(calculation.getOperand1() / calculation.getOperand2());
        calculation.setOperator("/");
        return calculationRepository.save(calculation);
    }
}
