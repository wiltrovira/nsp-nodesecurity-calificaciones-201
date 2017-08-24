var calificaciones = require ("../lib/calificaciones").libroDeCalificaciones;

exports["setUp"] = function(callback){
    calificaciones.reset();
    callback();
};

exports["Puede agregar nuevas calificaciones"] = function(test){
    calificaciones.agregarCalificacion(5);
    var num = calificaciones.numeroDeCalificaciones();
    test.equal(num, 1);
    test.done();
};

exports["Puede calcular nota final A"] = function(test){
    calificaciones.agregarCalificacion(100);
    calificaciones.agregarCalificacion(90);
    var notaFinal = calificaciones.calcularNotaFinal();
    test.equal(notaFinal, "A");
    test.done();
};

exports["Puede calcular promedio de notas"] = function(test){
    calificaciones.agregarCalificacion(100);
    calificaciones.agregarCalificacion(50);
    var promedio = calificaciones.calcularPromedio();
    test.equal(promedio, 75);
    test.done();
};