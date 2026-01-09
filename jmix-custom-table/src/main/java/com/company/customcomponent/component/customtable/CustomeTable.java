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
    public Registration addRowDeleteListener(
            ComponentEventListener<RowDeleteEvent> listener) {
        return addListener(RowDeleteEvent.class, listener);
    }

    /* =====================
       React bus event
       ===================== */
    @DomEvent("row-delete")
    public static class RowDeleteEvent
            extends ComponentEvent<CustomeTable> {

        private final String rowId;

        public RowDeleteEvent(
                CustomeTable source,
                boolean fromClient,

                // payload
                @EventData("event.detail.rowId") String rowId
        ) {
            super(source, fromClient);
            this.rowId = rowId;
        }


        public String getRowId() {
            return rowId;
        }
    }
}
