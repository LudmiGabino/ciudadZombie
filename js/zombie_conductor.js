var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  // Completa constructor a partir de Enemigo 
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}

/* Creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function() {
  
  if (this.direccion == 'v') {
    this.y -= this.velocidad;
  } else {
    //Sino, hace otro movimiento
    this.x -= this.velocidad;
  }

  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
  }

  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
    this.velocidad *= -1;
  }

}
/*

ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderTodasLasVidas();
}
*/

ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderVidas(jugador.vidas);
}