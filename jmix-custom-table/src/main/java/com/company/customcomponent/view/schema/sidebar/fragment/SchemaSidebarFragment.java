package com.company.customcomponent.view.schema.sidebar.fragment;


import com.company.customcomponent.component.schema.events.SchemaTableAddedEvent;
import com.company.customcomponent.view.schema.dialog.SchemaDataView;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.ComponentUtil;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.shared.Registration;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.component.UiComponentUtils;
import io.jmix.flowui.fragment.Fragment;
import io.jmix.flowui.fragment.FragmentDescriptor;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

@FragmentDescriptor("schema-sidebar-fragment.xml")
public class SchemaSidebarFragment extends Fragment<VerticalLayout> {
    @Autowired
    private DialogWindows dialogWindows;

    @ViewComponent
    private VerticalLayout contentArea;

    private Registration tableAddRegistration;


    @Subscribe(id = "addTable", subject = "clickListener")
    public void onAddTableClick(final ClickEvent<JmixButton> event) {
        View<?> parentView = UiComponentUtils.getView(this);
        DialogWindow<SchemaDataView> dialogWindow =  dialogWindows.view(parentView, SchemaDataView.class).build();
        dialogWindow.open();
    }

    @Subscribe
    public void onReady(final ReadyEvent event) {

        if (tableAddRegistration == null) {
            UI ui = UI.getCurrent();
            if (ui != null) {
                tableAddRegistration = ComponentUtil.addListener(
                        ui,
                        SchemaTableAddedEvent.class,
                        uiEvent -> addTableToSidebar(uiEvent.getPayload())
                );
            }
        }
    }


    private void toggleTable(VerticalLayout content, Button button) {
        boolean isVisible = content.isVisible();
        if (isVisible) {
            // Collapse: hide content smoothly
            content.setVisible(false);
            button.setIcon(VaadinIcon.CHEVRON_RIGHT.create());
        } else {
            // Expand: show content
            content.setVisible(true);
            button.setIcon(VaadinIcon.CHEVRON_DOWN.create());
        }
    }

    @SuppressWarnings("unchecked")
    private void addTableToSidebar(Map<String, Object> table) {
        if (table == null || contentArea == null) {
            return;
        }

        String id = asString(table.get("id"));
        String name = asString(table.get("name"));
        String tableName = asString(table.get("tableName"));
        List<Map<String, Object>> columns = (List<Map<String, Object>>) table.get("columns");

        VerticalLayout tableBox = new VerticalLayout();
        tableBox.addClassName("sidebar-item");
        tableBox.setWidthFull();
        tableBox.setSpacing(false);
        tableBox.setMargin(false);
        tableBox.setPadding(false);
        tableBox.getStyle().set("border-bottom", "1px solid #f0f0f0");

        HorizontalLayout headerRow = new HorizontalLayout();
        headerRow.addClassName("table-header-row");
        headerRow.setWidthFull();
        headerRow.setSpacing(true);
        headerRow.setPadding(true);
        headerRow.setAlignItems(FlexComponent.Alignment.CENTER);
        headerRow.getStyle().set("cursor", "pointer");
        headerRow.getStyle().set("background", "#fafafa");
        headerRow.getStyle().set("border-left", "4px solid #3b82f6");

        Button expandButton = new Button();
        expandButton.addClassName("expand-button");
        expandButton.setWidth("24px");
        expandButton.setHeight("24px");
        expandButton.getStyle().set("margin-right", "8px");
        expandButton.setIcon(VaadinIcon.CHEVRON_RIGHT.create());

        VerticalLayout tableHeader = new VerticalLayout();
        tableHeader.addClassName("table-header");
        tableHeader.setSpacing(false);
        tableHeader.setWidthFull();

        Span tableNameSpan = new Span(name.isEmpty() ? "<unnamed>" : name);
        tableNameSpan.addClassName("table-name");
        tableNameSpan.getStyle().set("font-weight", "600");
        tableNameSpan.getStyle().set("font-size", "14px");
        tableNameSpan.getStyle().set("margin", "0");

        Span tableMetaSpan = new Span("ID: " + emptySafe(id) + " • Table: " + emptySafe(tableName));
        tableMetaSpan.addClassName("table-meta");
        tableMetaSpan.getStyle().set("font-size", "11px");
        tableMetaSpan.getStyle().set("color", "#666");
        tableMetaSpan.getStyle().set("margin", "0");

        tableHeader.add(tableNameSpan, tableMetaSpan);
        headerRow.add(expandButton, tableHeader);

        VerticalLayout tableContent = new VerticalLayout();
        tableContent.addClassName("table-content");
        tableContent.setVisible(false);
        tableContent.setSpacing(true);
        tableContent.setPadding(true);
        tableContent.getStyle().set("background", "#f9f9f9");
        tableContent.getStyle().set("padding-left", "16px");
        tableContent.getStyle().set("padding-right", "16px");

        Span fieldsSpan = new Span("TRƯỜNG");
        fieldsSpan.addClassName("fields-Span");
        fieldsSpan.getStyle().set("font-weight", "bold");
        fieldsSpan.getStyle().set("font-size", "11px");
        fieldsSpan.getStyle().set("text-transform", "uppercase");
        fieldsSpan.getStyle().set("color", "#888");
        fieldsSpan.getStyle().set("margin-bottom", "8px");
        tableContent.add(fieldsSpan);

        if (columns != null) {
            for (Map<String, Object> column : columns) {
                tableContent.add(createFieldRow(column));
            }
        }

        Button addFieldButton = new Button("+ Thêm trường");
        addFieldButton.addClassName("add-field-button");
        addFieldButton.setWidthFull();
        addFieldButton.getStyle().set("margin-top", "8px");
        tableContent.add(addFieldButton);

        expandButton.addClickListener(e -> toggleTable(tableContent, expandButton));

        tableBox.add(headerRow, tableContent);
        contentArea.add(tableBox);
    }

    private HorizontalLayout createFieldRow(Map<String, Object> column) {
        HorizontalLayout row = new HorizontalLayout();
        row.addClassName("field-row");
        row.setWidthFull();
        row.setSpacing(true);
        row.setAlignItems(FlexComponent.Alignment.CENTER);
        row.getStyle().set("margin-bottom", "4px");
        row.getStyle().set("padding", "4px 0");

        Checkbox visible = new Checkbox();
        visible.addClassName("field-checkbox");
        visible.setValue(Boolean.TRUE.equals(column.get("visible")));
        visible.getStyle().set("flex-shrink", "0");
        visible.getStyle().set("margin-right", "8px");

        TextField name = new TextField();
        name.addClassName("field-name");
        name.setReadOnly(true);
        name.setValue(asString(column.get("name")));
        name.getStyle().set("flex", "1");
        name.getStyle().set("min-width", "0");
        name.getStyle().set("margin-right", "8px");

        Span type = new Span(asString(column.get("type")));
        type.addClassName("field-type-badge");
        type.getStyle().set("flex-shrink", "0");
        type.getStyle().set("font-size", "10px");
        type.getStyle().set("padding", "2px 6px");
        type.getStyle().set("background", "#e3f2fd");
        type.getStyle().set("border-radius", "3px");

        row.add(visible, name, type);
        return row;
    }

    private String asString(Object value) {
        return value == null ? "" : value.toString();
    }

    private String emptySafe(String value) {
        return value == null || value.isEmpty() ? "-" : value;
    }
}