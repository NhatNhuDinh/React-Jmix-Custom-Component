package com.company.customcomponent.component.customtable.parser;

import com.company.customcomponent.component.customtable.dto.ReactEnvelope;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

@Component
public class ReactMessageParser {
    private final ObjectMapper objectMapper;

    public ReactMessageParser(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public ReactEnvelope parse(String json) {
        try {
            return objectMapper.readValue(json, ReactEnvelope.class);
        } catch (Exception e) {
            throw new IllegalArgumentException("Invalid React message JSON", e);
        }
    }
}
