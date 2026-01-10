package com.company.customcomponent.view.customcomponent;


import com.company.customcomponent.bridge.ReactBridge;
import com.company.customcomponent.bridge.ReactEnvelope;
import com.company.customcomponent.bridge.ReactEventRouter;
import com.company.customcomponent.bridge.ReactMessageParser;
import com.company.customcomponent.bridge.handlers.DataRequestedHandler;
import com.company.customcomponent.component.customtable.App;
import com.company.customcomponent.events.UiEventEmitter;
import com.company.customcomponent.view.main.MainView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Map;


@Route(value = "custom-component", layout = MainView.class)
@ViewController(id = "CustomComponent")
@ViewDescriptor(path = "custom-component.xml")
public class CustomComponent extends StandardView {
    @ViewComponent
    private VerticalLayout root;
    @Autowired
    private ReactMessageParser parser;
    @Autowired private DataRequestedHandler dataRequestedHandler;

    @Subscribe
    public void onInit(final InitEvent event) {
        App table = new App();
        table.getStyle().setWidth("100%");
        root.add(table);

        dataRequestedHandler.register(router);
    }

    @Subscribe(id = "loadData", subject = "clickListener")
    public void onLoadDataClick(final ClickEvent<JmixButton> event) {
        UiEventEmitter.emit(UI.getCurrent(), "TABLE_TRIGGER_LOAD", "ReactHostView",
                Map.of("page", 0, "pageSize", 10, "filters", Map.of()));
    }

    private final ReactEventRouter router = new ReactEventRouter();

    @Subscribe
    public void onBeforeShow(BeforeShowEvent event) {
        ReactBridge bridge = new ReactBridge();

        // nếu muốn ẩn:
        bridge.getElement().getStyle().set("display", "none");

        // add bridge vào layout/root component (tùy view bạn)
        getContent().add(bridge); // hoặc root.add(bridge)

        // BẮT event từ React (JSON string) tại đây
        bridge.setOnMessage(json -> {
            ReactEnvelope env = parser.parse(json);

            UI ui = bridge.getUI().orElse(null);
            if (ui == null) return;

            // đảm bảo chạy trong UI thread
            ui.access(() -> router.dispatch(ui, env));
        });
    }


}