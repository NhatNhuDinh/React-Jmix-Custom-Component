package com.company.customcomponent.service;

import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class ReactDataService {

    private final List<Map<String, Object>> all = new CopyOnWriteArrayList<>();

    public ReactDataService() {
        all.add(row(1, "Tom",   "Cat",   2));
        all.add(row(2, "Jerry", "Mouse", 1));
        all.add(row(3, "Spike", "Dog",   5));
        all.add(row(4, "Kitty", "Cat",   3));
        all.add(row(5, "Max",   "Dog",   4));
        all.add(row(6, "Luna",  "Cat",   1));
        all.add(row(7, "Rocky", "Dog",   6));
        all.add(row(8, "Viet", "Human",   21));
        all.add(row(9, "Nhat", "Human",   21));
    }

    private Map<String, Object> row(int id, String name, String type, int age) {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("id", id);
        m.put("name", name);
        m.put("type", type);
        m.put("age", age);
        return m;
    }

    public Map<String, Object> loadAll(Map<String, Object> filters) {
        List<Map<String, Object>> filtered = new ArrayList<>(all);

        String q = filters == null ? null : (String) filters.get("q");
        if (q != null && !q.isBlank()) {
            String qq = q.toLowerCase(Locale.ROOT);
            filtered.removeIf(r ->
                    !String.valueOf(r.get("name")).toLowerCase(Locale.ROOT).contains(qq)
                            && !String.valueOf(r.get("type")).toLowerCase(Locale.ROOT).contains(qq)
                            && !String.valueOf(r.get("id")).toLowerCase(Locale.ROOT).contains(qq)
                            && !String.valueOf(r.get("age")).toLowerCase(Locale.ROOT).contains(qq)
            );
        }

        return Map.of(
                "total", filtered.size(),
                "rows", filtered
        );
    }


    public void deleteById(String rowId) {
        if (rowId == null) return;
        String id = String.valueOf(rowId).trim();

        // ✅ xoá thật khỏi dataset
        all.removeIf(r -> String.valueOf(r.get("id")).equals(id));
    }
}
