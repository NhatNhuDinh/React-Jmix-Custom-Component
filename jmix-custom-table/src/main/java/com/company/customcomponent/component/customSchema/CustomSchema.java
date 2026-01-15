package com.company.customcomponent.component.customSchema;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;

@Tag("custom-schema")
@JsModule("./src/component/custom-schema/meta-schema.js")
@CssImport("./src/component/custom-schema/style.css")
public class CustomSchema extends Component {

}
