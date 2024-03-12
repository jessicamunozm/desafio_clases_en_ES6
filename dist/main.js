"use strict";

var _Impuestos = _interopRequireDefault(require("../js/Impuestos.js"));
var _Cliente = _interopRequireDefault(require("../js/Cliente.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Cliente1 = new _Cliente["default"]("Juan Gomez");
var impuestos1 = new _Impuestos["default"](10000000, 500000);
console.log("".concat(Cliente1._nombre, ": con un monto bruto total de ventas de $").concat(impuestos1.brutoAnual, " y una deducci\xF3n de $").concat(impuestos1.deducciones, " el impuesto anual correspondiente a pago es de: $").concat(impuestos1.calculoImpuestos()));
var Cliente2 = new _Cliente["default"]("Daniel Rojas");
var impuestos2 = new _Impuestos["default"](15000000, 600000);
console.log("".concat(Cliente2._nombre, ": con un monto bruto total de ventas de $").concat(impuestos2.brutoAnual, " y una deducci\xF3n de $").concat(impuestos2.deducciones, " el impuesto anual correspondiente a pago es de: $").concat(impuestos2.calculoImpuestos()));