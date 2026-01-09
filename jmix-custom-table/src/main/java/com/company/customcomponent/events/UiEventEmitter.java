package com.company.customcomponent.events;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vaadin.flow.component.UI;

import java.time.Instant;
import java.util.Map;
import java.util.UUID;

public final class UiEventEmitter {
    public static final String EVENT_NAME = "jmix:ui";
    public static final int VERSION = 1;
    private static final ObjectMapper MAPPER = new ObjectMapper();
    private UiEventEmitter() {}

    public static void emit(UI ui, String type, String source, Map<String, Object> payload) {
        emit(ui, type, source, payload, UUID.randomUUID().toString());
    }

    public static void emit(UI ui, String type, String source, Map<String, Object> payload, String correlationId) {
        if (ui == null) return;

        Map<String, Object> detail = Map.of(
                "v", VERSION,
                "type", type,
                "ts", Instant.now().toEpochMilli(),
                "source", source,
                "payload", payload == null ? Map.of() : payload,
                "correlationId", correlationId == null ? "" : correlationId
        );

        try {
            String json = MAPPER.writeValueAsString(detail);

            ui.getPage().executeJs(
                    """
                    window.dispatchEvent(
                      new CustomEvent($0, { detail: JSON.parse($1) })
                    );
                    """,
                    EVENT_NAME,
                    json
            );

        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to serialize UI event to JSON", e);
        }
    }
}
