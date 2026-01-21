package com.company.customcomponent.view.schema.dialog;


import com.company.customcomponent.view.main.MainView;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.DialogMode;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;

@Route(value = "schema-data-view", layout = MainView.class)
@ViewController(id = "SchemaDataView")
@ViewDescriptor(path = "schema-data-view.xml")
@DialogMode(width = "80%", height = "100%")
public class SchemaDataView extends StandardView {
}