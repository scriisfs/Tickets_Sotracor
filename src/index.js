const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenidos a sotracor");
});

app.get("/registros", (req, res) => {
  let registros = [
    { cod_registro: 001, cod_adm: 12, cod_ticket: 4, cod_estudiante: 7, pin: 159, fecha_creación:"22/03/2019" }
  ];
  res.send(registros);
});

app.get("/admins", (req, res) => {
  let admin = [
    { cod_adm: 12, nombre_1: "Luis", nombre_2: "Mauricio", apellido_1: "Martínez", apellido_2: "ávila", número_cédula: 14589327, télefono: 3156985623 },
    { cod_adm: 13, nombre_1: "Pedro", nombre_2: "Pablito", apellido_1: "Poncho", apellido_2: "Medrano", número_cédula: 14848857, télefono: 3035698545 }
  ];
  res.send(admin);
});

app.get("/tickets", (req, res) => {
  let tickets = [
    { cod_ticket: 4, número_recargas: 50, número_consumo: 20  }
  ];
  res.send(tickets);
});

app.get("/estudiantes_bloques", (req, res) => {
  let estudiantes_bloques = [
    { cod_estudiante: 7, nombre_1: "Luisa", nombre_2: "María", apellido_1: "Fernandez", apellido_2: "Montiel", número_identificación: 145896523, télefono: 3012589565, barrio: "La esperanza", estrato: 2, id_bloque: 056, día:"Martes", hora_inicio: "9:00 am", hora_finalización: "11:00 am"}
  ];
  res.send(estudiantes_bloques);
});


app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});

