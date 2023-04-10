package com.fscalculator.demo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "calculations")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Calculation {
    @Id
    private ObjectId _id;
    private double operand1;
    private double operand2;

    private double results;
    private String operator;
}
