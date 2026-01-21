package com.company.customcomponent.component.schema.events;

import com.vaadin.flow.component.ComponentEvent;
import com.vaadin.flow.component.UI;

import java.util.Map;

public class SchemaTableAddedEvent extends ComponentEvent<UI> {
    private final Map<String, Object> payload;

    public SchemaTableAddedEvent(UI source, Map<String, Object> payload) {
        super(source, false);
        this.payload = payload;
    }

    public Map<String, Object> getPayload() {
        return payload;
    }
}
