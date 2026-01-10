package com.company.customcomponent.bridge;

import com.vaadin.flow.component.UI;

import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.function.BiConsumer;

public class ReactEventRouter {

    private final Map<String, List<BiConsumer<UI, ReactEnvelope>>> handlers = new HashMap<>();

    public AutoCloseable on(String type, BiConsumer<UI, ReactEnvelope> handler) {
        handlers.computeIfAbsent(type, k -> new CopyOnWriteArrayList<>()).add(handler);
        return () -> {
            var list = handlers.get(type);
            if (list != null) list.remove(handler);
        };
    }

    public void dispatch(UI ui, ReactEnvelope msg) {
        var list = handlers.get(msg.getType());
        if (list == null) return;
        for (var h : list) h.accept(ui, msg);
    }
}
