package com.company.customcomponent.component.customtable.handler;

import com.company.customcomponent.component.customtable.CustomeTable;
import com.company.customcomponent.component.customtable.dto.ReactEnvelope;
import com.company.customcomponent.component.customtable.parser.ReactMessageParser;
import com.company.customcomponent.events.UiEventEmitter;
import com.vaadin.flow.component.UI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Map;

import static com.company.customcomponent.component.customtable.constants.EventConstant.ROW_ADD;
import static com.company.customcomponent.component.customtable.constants.EventConstant.ROW_DELETE;

@Component
public class HandlerReactEvent {

    @Autowired
    private ReactMessageParser reactMessageParser;

    public void handleData(CustomeTable.ReactUiEvent e) {

        String json = e.getEnvelopeJson();
        ReactEnvelope reactEnvelope = reactMessageParser.parse(json);

        // handle event
        switch(reactEnvelope.getType()) {
            case ROW_DELETE:

                String rowIndex = reactEnvelope.getPayload().get("rowIndex").toString();

                UiEventEmitter.emit(UI.getCurrent(), ROW_DELETE, "ReactHostView",
                        Map.of("rowIndex", Long.parseLong(rowIndex)));

                break;
            case ROW_ADD:
                System.out.println(reactEnvelope.getPayload());
                break;
            default:
                System.out.println(reactEnvelope.getPayload());
        }


    }

}
