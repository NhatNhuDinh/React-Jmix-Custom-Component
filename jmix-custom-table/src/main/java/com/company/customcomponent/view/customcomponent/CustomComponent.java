package com.company.customcomponent.view.customcomponent;


import com.company.customcomponent.component.customtable.CustomeTable;
import com.company.customcomponent.component.customtable.handler.HandlerReactEvent;
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
    private HandlerReactEvent handlerReactEvent;
    @Subscribe
    public void onInit(final InitEvent event) {
        CustomeTable table = new CustomeTable();
        table.getStyle().setWidth("100%");

        table.addReactUiListener(e ->
            handlerReactEvent.handleData(e)
        );

        root.add(table);
    }

    @Subscribe(id = "loadData", subject = "clickListener")
    public void onLoadDataClick(final ClickEvent<JmixButton> event) {
        UiEventEmitter.emit(UI.getCurrent(), "TABLE_LOAD", "ReactHostView",
                Map.of("page", 1, "pageSize", 10, "filters", Map.of()));
    }




}