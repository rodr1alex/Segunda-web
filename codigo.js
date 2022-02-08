function f1(){
    var i=random(0,2);
    var mascota=mascotas[i];
    b1.innerText=mascota;
}

function f2(){
    var i=random(0,2);
    var nombre=nombres[i];
    b2.innerText=nombre;
}

function f3(){
    var i=random(0,1);
    var accion=acciones[i];
    b3.innerText=accion;
}

function random(x,y){
    var a=Math.random();
    b=parseInt(x+(a*(y-x+1)));
    return b;
}

var mascotas=[];
mascotas[0]="caballo";
mascotas[1]="toro";
mascotas[2]="loro";

var nombres=[];
nombres[0]="roberto";
nombres[1]="juancho";
nombres[2]="dagobreto godoy"

var acciones=[];
acciones[0]="acariciarlo";
acciones[1]="atenderlo";