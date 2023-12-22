'use strict'
let edades = [15, 45, 50];
edades.splice(1, 0, 29);
alert(edades);
let miEdad = 29;

for (let i = 0; i < edades.length; i++) {
    if (edades[i] > 25) {
        alert (edades[i]);
    }
}
