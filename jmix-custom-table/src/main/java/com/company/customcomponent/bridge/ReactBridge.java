package com.company.customcomponent.bridge;

import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;

import java.util.function.Consumer;

@Tag("react-bridge")
@JsModule("./react-bridge/react-bridge.ts")
public class ReactBridge extends Component {

    private Consumer<String> onMessage;

    public void setOnMessage(Consumer<String> onMessage) {
        this.onMessage = onMessage;
    }

    @ClientCallable
    private void onReactEvent(String json) {
        if (onMessage != null) onMessage.accept(json);
    }
}
