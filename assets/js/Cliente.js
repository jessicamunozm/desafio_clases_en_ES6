export default class Cliente {
    constructor (nombre, impuestos) {
        this.nombre = nombre
        this.impuestos = impuestos;
        }
get nombre () {
    return this._nombre
}
set nombre (nombreCliente) {
    this._nombre = nombreCliente
}
}