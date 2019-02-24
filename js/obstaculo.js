var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;

  // Implementa el metodo chocar(jugador) para que al chocar con un obstaculo
  // el jugador pierda vidas
  this.chocar = function(jugador){
    jugador.perderVidas(this.potencia);
    this.potencia = 0;
  }
}
