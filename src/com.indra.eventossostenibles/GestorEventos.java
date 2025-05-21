package com.indra.eventossostenibles;

import java.util.ArrayList;

public class GestorEventos {
    private ArrayList<Evento> eventos = new ArrayList<>();
    private ArrayList<Usuario> usuarios = new ArrayList<>();
    private ArrayList<Organizador> organizadores = new ArrayList<>();

    public void agregarEvento(Evento evento) {
        eventos.add(evento);
    }

    public void registrarUsuario(Usuario usuario) {
        usuarios.add(usuario);
    }

    public ArrayList<Evento> listarEventos() {
        return eventos;
    }
}
