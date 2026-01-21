package com.company.customcomponent.view.schema;


import com.company.customcomponent.component.schema.Schema;
import com.company.customcomponent.component.schema.dto.ReactEnvelope;
import com.company.customcomponent.component.schema.parser.ReactMessageParser;
import com.company.customcomponent.view.main.MainView;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import static com.company.customcomponent.component.schema.constants.EventConstant.TABLE_CREATED;
import static com.company.customcomponent.component.schema.constants.EventConstant.TABLE_DELETE;

@Route(value = "schema-view", layout = MainView.class)
@ViewController(id = "SchemaView")
@ViewDescriptor(path = "schema-view.xml")
public class SchemaView extends StandardView {
    @ViewComponent
    private VerticalLayout root;
    @Autowired
    private ReactMessageParser reactMessageParser;

    @Subscribe
    public void onInit(final View.InitEvent event) {
        Schema table = new Schema();
        table.getStyle().setWidth("100%");

        table.addReactUiListener(e -> {
            ReactEnvelope env = reactMessageParser.parse(e.getEnvelopeJson());
            switch (env.getType()) {
                case TABLE_CREATED:
                    System.out.println(env.getPayload());
                    break;
                case TABLE_DELETE:
                    System.out.println(env.getPayload());
                    break;
                default:
                    break;
            }
        });

        root.add(table);
    }

}