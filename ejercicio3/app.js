const miDiv = document.getElementById('midiv');
const boton = document.getElementById('boton');

const serTexto = data => {
  miDiv.textContent = data;
};

const getData = () => {
  return new Promise((resuelve, rechazar) => {
    serTexto("puedo jugar");
    setTimeout(() => {
      resuelve(true);
    }, 1000); 
  });
};

const showdata = () => {
  return new Promise((resuelve1, rechazar1) => {
    serTexto("esperando");
    setTimeout(() => {
      resuelve1({ jugador: "jhon" });
    }, 2000);
  });
};

boton.addEventListener('click', () => {
  getData().then(permitido => {
    if (permitido) {
      return showdata();
    }
  }).then(user => {
    serTexto(user.jugador);
  });
});



//serTexto(user.jugador);
/*  else if (permitido===false) {
    boton.addEventListener("click", () => {
    posicion +=1000;   
     element.style.transform = `translateX(${posicion}px)`;
  */