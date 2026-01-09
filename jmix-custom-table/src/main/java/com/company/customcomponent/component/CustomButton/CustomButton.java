package com.company.customcomponent.component.CustomButton;

import com.vaadin.flow.component.*;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.shared.Registration;
@Tag("custom-button")
@JsModule("./src/component/customButton/CustomButtion.js")
public class CustomButton extends Component {

    public Registration addSpeakListener(
            ComponentEventListener<SpeakEvent> listener) {
        return addListener(SpeakEvent.class, listener);
    }

    @DomEvent("speak")
    public static class SpeakEvent extends ComponentEvent<CustomButton> {

        private final String message;

        public SpeakEvent(
                CustomButton source,
                boolean fromClient,
                @EventData("event.detail.message") String message
        ) {
            super(source, fromClient);
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
    }
}
