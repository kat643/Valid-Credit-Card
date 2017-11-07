var num = prompt('Ingrese numero de tarjeta');

if (num === '') {
  alert('Campo vacio,Inserte numero de tarjeta');
} else if (num.length < 16 || num.length > 16) {
  alert('Numero no valido, Inserte numero de tarjeta');
} else {
  isValidCard(num);
};
