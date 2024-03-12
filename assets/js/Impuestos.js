export default class Impuestos {
    constructor (brutoAnual, deducciones) {
        this.brutoAnual = brutoAnual
        this.deducciones = deducciones
    }
    get brutoAnual () {
        return this._brutoAnual
    }
    set brutoAnual (montoBrutoAnual) {
        this._brutoAnual = montoBrutoAnual
    }
    
    get deducciones () {
        return this._deducciones
    }
    set deducciones (valorDeducciones) {
        this._deducciones = valorDeducciones
    }
    calculoImpuestos() {
        return (this._brutoAnual - this._deducciones) * 0.21;
    }
}

