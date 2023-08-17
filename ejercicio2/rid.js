
const form=document.getElementById('form');

const calcularPromedio=()=> {
    const nota1 = parseInt(document.querySelector('#nota1').value);
    const nota2 = parseInt(document.querySelector('#nota2').value);
    const nota3 = parseInt(document.querySelector('#nota3').value);
    const notas = [nota1, nota2, nota3];
    const definitiva = calcularPromedioNotas(notas, calcularPorcentajes);

    console.log("El promedio es: " + definitiva);

    const elemento=document.createElement('p');
    elemento.textContent = "el promedio es:  " +definitiva;
    form.appendChild(elemento);

}

const calcularPromedioNotas=(notas,calcularPorcentajes)=> {
    
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    const promedio = suma / notas.length;
    const porcentajesCalculados = calcularPorcentajes(notas);
    console.log("Los porcentajes son: ", porcentajesCalculados);
    return promedio;
    
}


function calcularPorcentajes(notas) {
   
const pn1=0.3;
const pn2=0.3;
const pn3=0.3;

const porcentajes=[
    notas[0]*pn1 + notas[1]*pn2+notas[2]*pn3
];
return porcentajes;

}


/*
const pn1=nota1*0.3;
const pn2=nota2*0.3;
const pn3=nota3*0.3;
console.log("los porcentajes son: ",pn1,pn2,pn3);
*/










//callbacks//
/*
function general(){
    alert('1. mi funcion');
     l(afuncion);
}



function l(bfuncion){
bfuncion();
}

function afuncion(){
    alert('2.estoy trabajando')
}
*/