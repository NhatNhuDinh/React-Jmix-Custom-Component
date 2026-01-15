package com.company.customcomponent.view.customcomponent;


import com.company.customcomponent.bridge.ReactBridge;
import com.company.customcomponent.bridge.ReactEnvelope;
import com.company.customcomponent.bridge.ReactMessageParser;
import com.company.customcomponent.bridge.handlers.DataRequestedHandler;
import com.company.customcomponent.component.customSchema.CustomSchema;
import com.company.customcomponent.events.UiEventEmitter;
import com.company.customcomponent.view.main.MainView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.Dialogs;
import io.jmix.flowui.app.inputdialog.DialogActions;
import io.jmix.flowui.app.inputdialog.DialogOutcome;
import io.jmix.flowui.app.inputdialog.InputParameter;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;


@Route(value = "custom-component", layout = MainView.class)
@ViewController(id = "CustomComponent")
@ViewDescriptor(path = "custom-component.xml")
public class CustomComponent extends StandardView {
    @ViewComponent
    private VerticalLayout root;
    @Autowired
    private ReactMessageParser parser;
    @Autowired
    private Dialogs dialogs;

    @Subscribe
    public void onInit(final InitEvent event) {
        CustomSchema schema = new CustomSchema();
        schema.getStyle().setWidth("100%");
        root.add(schema);
    }

    @Subscribe(id = "loadData", subject = "clickListener")
    public void onLoadDataClick(final ClickEvent<JmixButton> event) {

        Map<String, Object> schema = Map.of(
                "autoLayout", true,
                "tables", List.of(
                        Map.of(
                                "id", "tbl_user",
                                "name", "User",
                                "tableName", "sec_user",
                                "columns", List.of(
                                        Map.of("name", "id", "type", "uuid", "isPrimaryKey", true, "visible", true),
                                        Map.of("name", "username", "type", "varchar", "visible", true),
                                        Map.of("name", "orders", "type", "array", "visible", true)
                                )
                        ),
                        Map.of(
                                "id", "tbl_order",
                                "name", "Order",
                                "tableName", "sales_order",
                                "columns", List.of(
                                        Map.of("name", "id", "type", "uuid", "isPrimaryKey", true, "visible", true),
                                        Map.of("name", "user_id", "type", "uuid", "isForeignKey", true, "visible", true)
                                )
                        )
                ),
                "relationships", List.of(
                        Map.of(
                                "type", "array",
                                "relationshipType", "1-n",
                                "sourceNodeId", "tbl_user",
                                "targetNodeId", "tbl_order",
                                "sourceKey", "id",
                                "targetKey", "user_id",
                                "fieldName", "orders"
                        )
                )
        );

        UiEventEmitter.emit(
                UI.getCurrent(),
                "SCHEMA_LOAD",
                "ReactHostView",
                schema
        );
    }

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

            if(env.getType().equals("field:add")) {
                dialogs.createInputDialog(this)
                        .withHeader("Nhập trường muốn thêm")
                        .withParameters(
                                InputParameter.stringParameter("name").withLabel("Tên trường").withRequired(true)

                        )
                        .withActions(DialogActions.OK_CANCEL)
                        .withCloseListener(closeEvent -> {
                            if (closeEvent.closedWith(DialogOutcome.OK)) {
                                String name = closeEvent.getValue("name");

                            }
                        })
                        .open();
            }
        });
    }


}