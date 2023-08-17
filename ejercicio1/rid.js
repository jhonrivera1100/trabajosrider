    const botondatos=document.getElementById("datos");
    const form=document.getElementById("form");
/*    
    botondatos.addEventListener("click",function()
    {
    const mes=document.getElementById("#mes");
    const año=document.getElementById("#año");
    const trim=document.getElementById("#trim");
    const gana=document.getElementById("#gana");
    const pierde=document.getElementById("#pierde");
    const comp=document.getElementById("#comp");

    const ingresa=`mes: ${mes}, año: ${año}, trim: ${trim}, comp: ${comp}`
    document.getElementById("ingresa").innerHTML=ingresa
    });*/
    /*function validarFormulario() {
        const año=document.querySelector("#año").value;
        const mes = document.querySelector("#mes").value;
        const trim = document.querySelector("#trim").value;
        const resultado= document.querySelector('input[name="resultado"]:checked').value;
        const comp= document.querySelector("#comp").value;
        return;
        }
        
        const message =` Año  ${año}\nMes seleccionado: ${mes}\nTrimestre: ${trim}\nResultado: ${resultado}\nCompetencia: ${comp};`
        alert(message);
        */

/*

        function validarFormulario(month, age, trime, resultad, compo) {
            const año = document.querySelector("#año").value;
            const mes = document.querySelector('select[name="mes"]').value;
            const trim = document.querySelector('input[name="trim"]').value;
            const resultado = document.querySelector('input[name="resultado"]:checked').value;
            const comp = document.querySelector('input[name="comp"]').value;
            const message = `Año seleccionado: ${año}\nMes seleccionado: ${mes}\nTrimestre: ${trim}\nResultado: ${resultado}\nCompetencia: ${comp}`;
            alert(message);
        }
        
*/




function validarFormulario() {
    const años = document.getElementById("año").value;
    const meses = document.getElementById("mes").value;
    const trims = document.getElementById("trim").value;
    const fech=document.getElementById("fecha").value;
    const resultados = document.querySelector('input[name="resultado"]:checked').value;
    const comps = document.getElementById("comp").value;

  const array=[meses, años,trims,fech, resultados, comps];

    const elemento=document.createElement("p");
    elemento.textContent=`MES : ${array[0]}\n AÑO: ${array[1]}\nTrimestre: ${array[2]}\nfecha de evaluacion: ${array[3]} \nResultado: ${array[4]}\nCompetencia: ${array[5]}`;
form.appendChild(elemento);
let divisiones=fech.slice(5,7);


}

function obtenerNombreMes(fech) {
    let nombreMes = "";
    switch (fech) {
      case 1:
        nombreMes = "Enero";
        break;
      case 2:
        nombreMes = "Febrero";
        break;
      case 3:
        nombreMes = "Marzo";
        break;
      case 4:
        nombreMes = "Abril";
        break;
      case 5:
        nombreMes = "Mayo";
        break;
      case 6:
        nombreMes = "Junio";
        break;
      case 7:
        nombreMes = "Julio";
        break;
      case 8:
        nombreMes = "Agosto";
        break;
      case 9:
        nombreMes = "Septiembre";
        break;
      case 10:
        nombreMes = "Octubre";
        break;
      case 11:
        nombreMes = "Noviembre";
        break;
      case 12:
        nombreMes = "Diciembre";
        break;
      default:
        nombreMes = "Mes inválido";
    }
    return nombreMes;
  }
  
//   // Ejemplo de uso
//   const numeroMes = 3; // Cambia este número para obtener diferentes meses
//   const nombreMes = obtenerNombreMes(numeroMes);
//   console.log(nombreMes); // Debería mostrar "Marzo" en la consola    