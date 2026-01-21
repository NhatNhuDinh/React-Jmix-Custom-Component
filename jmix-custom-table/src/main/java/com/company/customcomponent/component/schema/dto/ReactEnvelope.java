package com.company.customcomponent.component.schema.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ReactEnvelope {
    private int v;
    private String type;
    private long ts;
    private String source;
    private Map<String, Object> payload;
    private String correlationId;

    public int getV() { return v; }
    public void setV(int v) { this.v = v; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public long getTs() { return ts; }
    public void setTs(long ts) { this.ts = ts; }

    public String getSource() { return source; }
    public void setSource(String source) { this.source = source; }

    public Map<String, Object> getPayload() { return payload; }
    public void setPayload(Map<String, Object> payload) { this.payload = payload; }

    public String getCorrelationId() { return correlationId; }
    public void setCorrelationId(String correlationId) { this.correlationId = correlationId; }
}
