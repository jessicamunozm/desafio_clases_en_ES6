import Impuestos from "../js/Impuestos.js";
import Cliente from "../js/Cliente.js";

let Cliente1 = new Cliente ("Juan Gomez")
let impuestos1 = new Impuestos(10000000, 500000);
console.log(`${Cliente1._nombre}: con un monto bruto total de ventas de $${impuestos1.brutoAnual} y una deducción de $${impuestos1.deducciones} el impuesto anual correspondiente a pago es de: $${impuestos1.calculoImpuestos()}`);

let Cliente2 = new Cliente ("Daniel Rojas")
let impuestos2 = new Impuestos(15000000, 600000);
console.log(`${Cliente2._nombre}: con un monto bruto total de ventas de $${impuestos2.brutoAnual} y una deducción de $${impuestos2.deducciones} el impuesto anual correspondiente a pago es de: $${impuestos2.calculoImpuestos()}`);




