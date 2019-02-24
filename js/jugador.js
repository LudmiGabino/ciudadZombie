var Jugador = {
  //el sprite contiene la ruta de la imagen
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  moverse: function (x, y, tecla) {
    
    this.x += x;
    this.y += y;
    
    switch(tecla){
      case 'izq': 
        this.sprite = 'imagenes/auto_rojo_izquierda.png';
        this.alto = 15;
        this.ancho = 30;
        break;
      case 'der':
        this.sprite = 'imagenes/auto_rojo_derecha.png';
        this.alto = 15;
        this.ancho = 30;
        break;
      case 'arriba': 
        this.sprite = 'imagenes/auto_rojo_arriba.png';
        this.alto = 30;
        this.ancho = 15;
        break;
      case 'abajo':
        this.sprite = 'imagenes/auto_rojo_abajo.png';
        this.alto = 30;
        this.ancho = 15;
        break;
    }
    
  },
  perderVidas: function(cantVidas){
    this.vidas -= cantVidas;
  }
  
/*  perderTodasLasVidas: function(){
    this.vidas = 0;
  }*/

}
  