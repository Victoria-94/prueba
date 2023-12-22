'use strict'
function Student (nombre, correo, promedio){
    this.nombre=nombre;
    this.correo= correo;
    this.promedio=promedio;
    
    this.validaPromedio = function () {
        if (this.promedio >= 70){
        return "aprobado";
        } else { 
            return "reprobado"; }
    };
    this.usuario= function(){
        let emailname= 'victoria.q10@outlook.es'; 
        let user= emailname.indexOf("@");
        return emailname.slice(0, user);
        }        
    }
let studentOne =new Student("Victoria", "Victoria.q10@outlook.es", 70);
alert(studentOne.validaPromedio());
alert(studentOne.usuario());