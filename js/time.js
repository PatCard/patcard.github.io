function mostrarFechaHora() {
    //Se declaran las variables y arreglos
    var now = new Date();
    var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var diaNombre = dias[now.getDay()];
    var diaNumero = now.getDate();
    var mes = meses[now.getMonth()];
    var anio = now.getFullYear();
    var hora = now.getHours();
    var minuto = now.getMinutes();
    var segundo = now.getSeconds();
    var dateTime = document.getElementById('date-time');
    //dateTime es la variables que se retronara al archivo html
    dateTime.innerHTML = diaNombre + ' ' + diaNumero + ' de ' + mes + ' ' + anio + ' - ';
    if (hora < 10) { //Compara si el valor es menor a 10 para poder añadirle un cero al digito
      dateTime.innerHTML += '0' + hora;
    } else {
      dateTime.innerHTML += hora;
    }
    dateTime.innerHTML += ':';
    if (minuto < 10) {//Compara si el valor es menor a 10 para poder añadirle un cero al digito
      dateTime.innerHTML += '0' + minuto;
    } else {
      dateTime.innerHTML += minuto;
    }
    dateTime.innerHTML += ':';
    if (segundo < 10) {//Compara si el valor es menor a 10 para poder añadirle un cero al digito
      dateTime.innerHTML += '0' + segundo;
    } else {
      dateTime.innerHTML += segundo;
    }  
  }
  setInterval(mostrarFechaHora, 1000); //Se llama a la funcion mostrarFechaHora cada 1000 mseg
  