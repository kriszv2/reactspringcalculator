package com.fscalculator.demo;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CalculationService {
    @Autowired
    private CalculationRepository calculationRepository;
    public List<Calculation> AllCalculations(){
        return calculationRepository.findAll();
    }
    public Optional<Calculation> singleCalculation(ObjectId id){
            return calculationRepository.findById(id);
    }
}
