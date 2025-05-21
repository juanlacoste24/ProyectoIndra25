package com.indra.eventossostenibles;

import java.util.ArrayList;

public class Usuario {
    private String nombre;
    private String email;
    private ArrayList<Evento> eventosInscritos = new ArrayList<>();

    public Usuario(String nombre, String email) {
        this.nombre = nombre;
        this.email = email;
    }

    public void inscribirse(Evento evento) {
        eventosInscritos.add(evento);
    }

    public void cancelarInscripcion(Evento evento) {
        eventosInscritos.remove(evento);
    }
}
