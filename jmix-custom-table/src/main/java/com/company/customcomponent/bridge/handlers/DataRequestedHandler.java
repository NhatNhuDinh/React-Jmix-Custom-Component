package com.company.customcomponent.bridge.handlers;

import com.company.customcomponent.bridge.ReactEventRouter;
import com.company.customcomponent.events.UiEventEmitter;
import com.company.customcomponent.service.ReactDataService;
import io.jmix.flowui.Dialogs;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class DataRequestedHandler {

    private final ReactDataService reactDataService;

    public DataRequestedHandler(ReactDataService reactDataService) {
        this.reactDataService = reactDataService;
    }

    public void register(ReactEventRouter router) {

        router.on("field:add",  (ui, msg) -> {
            System.out.println(msg.getPayload());
        });


        router.on("DATA_REQUESTED", (ui, msg) -> {
            String corr = msg.getCorrelationId();
            Map<String, Object> payload = msg.getPayload() == null ? Map.of() : msg.getPayload();
            String target = (String) payload.get("target");

            if ("list".equalsIgnoreCase(target)) {
                Map<String, Object> filters = payload.get("filters") instanceof Map<?, ?>
                        ? (Map<String, Object>) payload.get("filters")
                        : Map.of();

                var data = reactDataService.loadAll(filters); // rows = all
                UiEventEmitter.emit(ui, "LIST_FULL_DATA", "DataRequestedHandler", data, corr);
            }
        });

        router.on("ROW_DELETE_REQUESTED", (ui, msg) -> {
            String corr = msg.getCorrelationId();
            Map<String, Object> payload = msg.getPayload() == null ? Map.of() : msg.getPayload();
            String rowId = payload.get("rowId") == null ? null : String.valueOf(payload.get("rowId"));

            try {
                reactDataService.deleteById(rowId);

                UiEventEmitter.emit(ui, "DELETE_ROW_OK", "DataRequestedHandler", Map.of("rowId", rowId), corr);

            } catch (Exception ex) {
                UiEventEmitter.emit(ui, "ROW_DELETE_FAILED", "DataRequestedHandler",
                        Map.of("rowId", rowId, "message", ex.getMessage()), corr);
            }
        });


    }

}
