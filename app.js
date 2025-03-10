/**Seleccionamos los elementos del DOM */
/**Metodo Floor nos permite redondear el numero a un entero */

const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexAleatorio(){
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() *16);
        colorHex += digitos[indiceAleatorio];
    }
return colorHex;
}

boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio();
     //actualizar el texto
    color.textContent = colorAleatorio;
    //actulizar el color del fondo
    document.body.style.backgroundColor = colorAleatorio;
})