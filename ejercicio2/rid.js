/*
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

*/
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

const form = document.getElementById('form');

const calcularPromedio = () => {
    return new Promise((resolver, rechazar) => {
        const nota1 = parseInt(document.querySelector('#nota1').value);
        const nota2 = parseInt(document.querySelector('#nota2').value);
        const nota3 = parseInt(document.querySelector('#nota3').value);

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            rechazar("Ingrese un número válido en todas las notas");
        } else {
            resolver([nota1, nota2, nota3]);
        }
    });
};

const calcularPromedioNotas = notas => {
    return new Promise((resolver, rechazar) => {
        const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
        const promedio = suma / notas.length;
        resolver(promedio);
    });
};

const calcularPorcentajes = notas => {
    return new Promise((resolver) => {
        const pn1 = 0.3;
        const pn2 = 0.3;
        const pn3 = 0.3;

        const porcentaje = notas[0] * pn1 + notas[1] * pn2 + notas[2] * pn3;
        resolver(porcentaje);
    });
};

const mostrarResultado = (promedio, porcentaje) => {
    console.log("El promedio es: " + promedio);
    console.log("El porcentaje ponderado es: " + porcentaje);

    const resultadoPromedio = document.createElement('p');
    resultadoPromedio.textContent = "El promedio es: " + promedio;

    const resultadoPorcentaje = document.createElement('p');
    resultadoPorcentaje.textContent = "El porcentaje ponderado es: " + porcentaje;

    form.appendChild(resultadoPromedio);
    form.appendChild(resultadoPorcentaje);
};

form.addEventListener('submit', async event => {
    event.preventDefault();

    try {
        const notas = await calcularPromedio();
        const promedio = await calcularPromedioNotas(notas);
        const porcentaje = await calcularPorcentajes(notas);
        mostrarResultado(promedio, porcentaje);
    } catch (error) {
        console.error(error);
    }
});