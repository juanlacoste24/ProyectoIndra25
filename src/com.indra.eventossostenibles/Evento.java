package com.indra.eventossostenibles;

public class Evento {
    private String nombre;
    private String fecha;
    private String descripcion;
    private Categoria categoria;
    private Ubicacion ubicacion;
    private Organizador organizador;

    public Evento(String nombre, String fecha, String descripcion, Categoria categoria, Ubicacion ubicacion, Organizador organizador) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.organizador = organizador;
    }

    public String getNombre() { return nombre; }
    public String getFecha() { return fecha; }
    public String getDescripcion() { return descripcion; }

    public String getResumen() {
        return nombre + " - " + fecha + " (" + categoria.getNombre() + ")";
    }
}
