var libroDeCalificaciones = {
    _calificaciones : [],
    agregarCalificacion : function(nuevaCalificacion){
        this._calificaciones.push(nuevaCalificacion);
    },
    numeroDeCalificaciones : function(){
        return this._calificaciones.length;
    },
    calcularPromedio : function(){
        var promedio = 0, suma = 0;
        if(this._calificaciones.length > 0){
            for(var i=0; i < this._calificaciones.length; i++){
                suma = suma + this._calificaciones[i];
            }
            return suma / this._calificaciones.length;
        }else {
            return 0;
        }
    },
    reset: function(){
        this._calificaciones = [];
    },
    calcularNotaFinal: function(){
        var promedio = this.calcularPromedio();
        if (promedio >= 90){
            return "A";
        } else if(promedio >= 80){
            return "B";
        } else if(promedio >= 70){
            return "D";
        } else if(promedio >= 60){
            return "E";
        } else{
            return "F";
        }
    }
};

//libroDeCalificaciones.agregarCalificacion(5);
//console.log(libroDeCalificaciones.numeroDeCalificaciones());
exports.libroDeCalificaciones = libroDeCalificaciones;