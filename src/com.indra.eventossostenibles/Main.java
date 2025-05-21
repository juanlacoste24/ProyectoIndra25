package com.indra.eventossostenibles;

public class Main {
    public static void main(String[] args) {
        Categoria taller = new Categoria("Taller");
        Ubicacion ubicacion = new Ubicacion("presencial", "Calle Verde 123");
        Organizador organizador = new Organizador("EcoVida", "contacto@ecovida.com");

        Evento evento = new Evento("Reciclaje Creativo", "2025-06-01", "Aprende a reciclar con arte", taller, ubicacion, organizador);

        Usuario usuario = new Usuario("Juan Pérez", "juan@example.com");

        GestorEventos gestor = new GestorEventos();
        gestor.agregarEvento(evento);
        gestor.registrarUsuario(usuario);

        usuario.inscribirse(evento);

        for (Evento e : gestor.listarEventos()) {
            System.out.println(e.getResumen());
        }
    }
}
