const fecha =document.querySelector(".fecha");
fecha.textContent=new Date().toLocaleDateString("es-cl");

/*
let nombre="kazu";
let apellido="san martin";
let nombrecompleto=nombre+" "+apellido;
console.log(nombrecompleto);

let nota=85;
if (nota>=90){
    console.log("exelente")
} else if (nota>=70){
    console.log("bien")
} else if (nota>=50){
    console.log("bien")
} else {
    console.log("insuficiente")
}

for(let i=1;i<=10;i++){
    console.log(i);
}

let numero=0;
while (numero<=0){
    numero=parseInt(prompt("ingrese un numero"));
}

let edad=20
if (edad>=18){
    console.log("usuario mayor");
} else {
    console.log("menor de edad")
}*/


const boton=document.getElementById("btnenviar");
const campo=document.getElementById("enviar");

boton.onclick=function(){
    alert("mensaje enviado");
    campo.value="";
}

boton.addEventListener ("click",boton.onclick=function(){
    alert("mensaje enviado");
    campo.value="";
    });


document.getElementById("prueba").innerHTML="<h1>atte.kazu miau</h1>" 
document.getElementById("prueba").textContent="atte.kazu miau"