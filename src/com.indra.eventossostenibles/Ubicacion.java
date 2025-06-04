package com.indra.eventossostenibles;

public class Ubicacion {
    private String tipo; // "online" o "presencial"
    private String direccion;

    public Ubicacion(String tipo, String direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }

    public String getTipo() { return tipo; }
}
