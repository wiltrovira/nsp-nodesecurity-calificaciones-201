"use strict";
var libro = require("./lib/calificaciones").libroDeCalificaciones;
var express = require("express");

//console.log(express);

var app = express();

app.get("/", function(request, response){
    response.send("Hola, mundo. Para calcular promedio escribe http://localhost:3000/notafinal?notas=90,80,70,60,50");
});

app.get("/notafinal", function(request, response){
    var notas = request.query.notas.split(",");
    for(var i=0; i < notas.length; i++){
        libro.agregarCalificacion(parseInt(notas[i]));
    }
    var promedio = libro.calcularPromedio();
    var notaFinal = libro.calcularNotaFinal();

    response.send("Su promedio es: " + promedio + ". Su nota final es:" + notaFinal )
})
app.listen(3000);
console.log("Esperando conexiones...");