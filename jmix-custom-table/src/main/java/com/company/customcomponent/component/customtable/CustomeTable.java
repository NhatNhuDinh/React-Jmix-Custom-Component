package com.company.customcomponent.component.customtable;

import com.vaadin.flow.component.*;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.shared.Registration;

@Tag("custom-table")
@JsModule("./src/component/custom-table/MyReactTable.js")
@CssImport("./src/component/custom-table/MyReactTable.css")
public class CustomeTable extends Component {

    /* =====================
       Public listener API
       ===================== */
    public Registration addReactUiListener(
            ComponentEventListener<ReactUiEvent> listener) {
        return addListener(ReactUiEvent.class, listener);
    }

    /* =====================
       React bus event
       ===================== */
    @DomEvent("react:ui")
    public static class ReactUiEvent
            extends ComponentEvent<CustomeTable> {

        private final String type;
        private final String payloadJson;
        private final String envelopeJson;

        public ReactUiEvent(
                CustomeTable source,
                boolean fromClient,

                // envelope fields
                @EventData("event.detail.type") String type,

                // payload JSON
                @EventData("JSON.stringify(event.detail.payload)")
                String payloadJson,

                // full envelope JSON (optional but VERY useful)
                @EventData("JSON.stringify(event.detail)")
                String envelopeJson
        ) {
            super(source, fromClient);
            this.type = type;
            this.payloadJson = payloadJson;
            this.envelopeJson = envelopeJson;
        }

        public String getType() {
            return type;
        }

        public String getPayloadJson() {
            return payloadJson;
        }

        public String getEnvelopeJson() {
            return envelopeJson;
        }

        /* =====================
           Helpers
           ===================== */
        public boolean isType(String expected) {
            return expected.equals(type);
        }
    }
}
