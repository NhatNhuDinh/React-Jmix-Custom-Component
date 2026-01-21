package com.company.customcomponent.view.schema.dialog.fragment;

import com.company.customcomponent.component.schema.events.SchemaTableAddedEvent;
import com.company.customcomponent.component.schema.events.UiEventEmitter;
import com.vaadin.flow.component.AbstractField;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.ComponentUtil;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import io.jmix.core.entity.KeyValueEntity;
import io.jmix.flowui.component.listbox.JmixListBox;
import io.jmix.flowui.fragment.Fragment;
import io.jmix.flowui.fragment.FragmentDescriptor;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.model.KeyValueCollectionContainer;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewComponent;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@FragmentDescriptor("schema-table-select-fragment.xml")
public class SchemaTableSelectFragment extends Fragment<VerticalLayout> {
    @ViewComponent
    private KeyValueCollectionContainer columns;
    @ViewComponent
    private KeyValueCollectionContainer tables;
    @ViewComponent
    private JmixListBox<KeyValueEntity> tableList;

    @Subscribe
    public void onReady(ReadyEvent event) {
        tableList.setItemLabelGenerator(item -> {
            Object name = item.getValue("name");
            return name != null ? name.toString() : "<unnamed>";
        });
        loadMockTables();
    }

    @Subscribe("tableList")
    public void onTableListComponentValueChange(final AbstractField.ComponentValueChangeEvent<JmixListBox<KeyValueEntity>, KeyValueEntity> event) {
        KeyValueEntity table = event.getValue();
        columns.getMutableItems().clear();

        if (table == null) {
            return;
        }

        List<Map<String, Object>> cols = table.getValue("columns");

        for (Map<String, Object> col : cols) {
            KeyValueEntity e = new KeyValueEntity();
            e.setValue("column", col.get("column"));
            e.setValue("type", col.get("type"));
            e.setValue("pk", col.get("pk"));
            columns.getMutableItems().add(e);
        }
    }

    @Subscribe(id = "createSchema", subject = "clickListener")
    public void onCreateSchemaClick(final ClickEvent<JmixButton> event) {

        KeyValueEntity table = tableList.getValue();
        if (table == null) {
            return;
        }

        Map<String, Object> payload = mapTableForFrontend(table);

        UI ui = UI.getCurrent();

        UiEventEmitter.emit(
                ui,
                "TABLE_ADD",
                "SchemaTableSelectFragment",
                payload
        );

        if (ui != null) {
            ComponentUtil.fireEvent(ui, new SchemaTableAddedEvent(ui, payload));
        }

    }

    private Map<String, Object> mapTableForFrontend(KeyValueEntity table) {

        List<Map<String, Object>> rawCols = table.getValue("columns");

        List<Map<String, Object>> columns = rawCols.stream()
                .map(col -> Map.<String, Object>of(
                        "name", col.get("column"),
                        "type", col.get("type"),
                        "pk", col.get("pk"),
                        "visible", true,
                        "isNotNull", false,
                        "isVirtual", false
                ))
                .toList();

        return Map.of(
                "id", randomTableId(table.getValue("id")),
                "name", table.getValue("name"),
                "tableName", table.getValue("tableName"),
                "columns", columns
        );
    }


    private void loadMockTables() {
        tables.getMutableItems().clear();

        tables.getMutableItems().add(table(
                "sample-api-user",
                "Users (API Sample)",
                "users_sample",
                -400, 0,
                "#60A5FA",
                List.of(
                        col("id", "int", true),
                        col("name", "varchar", false),
                        col("username", "varchar", false),
                        col("email", "varchar", false)
                )
        ));

        tables.getMutableItems().add(table(
                "products",
                "Products",
                "products",
                0, 0,
                "#F59E0B",
                List.of(
                        col("id", "uuid", true),
                        col("name", "varchar", false),
                        col("price", "money", false),
                        col("quantity", "int4", false)
                )
        ));
    }

    private KeyValueEntity table(
            String id,
            String name,
            String tableName,
            int x,
            int y,
            String color,
            List<Map<String, Object>> columns
    ) {
        KeyValueEntity e = new KeyValueEntity();
        e.setValue("id", id);
        e.setValue("name", name);
        e.setValue("tableName", tableName);
        e.setValue("x", x);
        e.setValue("y", y);
        e.setValue("color", color);
        e.setValue("columns", columns);
        return e;
    }

    private Map<String, Object> col(String name, String type, boolean pk) {
        return Map.of(
                "column", name,
                "type", type,
                "pk", pk
        );
    }

    private String randomTableId(String tableName) {
        return tableName + "-" + UUID.randomUUID().toString();
    }
}