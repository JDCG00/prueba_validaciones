/** 
    mecatron3000.js
    Controladro principal del juego Mecatron3000
    @author Juan Diego Carretero Granado <jcarreterogranado.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/

'use strict'

console.log('Cargado JS')

/*Validaciones*/



//Función para añadir módulos 1DAW

function unoDaw() {
    /*console.log('funciona');*/

    //Selecciona el párrafo de curso
    let pCurso = document.getElementById('pCurso')
    //Crea el br
    let br = document.createElement('br')
    pCurso.appendChild(br)
    //Crea el label
    let label = document.createElement('label')
    pCurso.appendChild(label)
    let textoLabel = document.createTextNode('Módulos 1DAW')
    label.appendChild(textoLabel)
    //Crea el select
    let select = document.createElement('select')
    pCurso.appendChild(select)
    //Crea los options
    let option1 = document.createElement('option')
    select.appendChild(option1)
    let texto1 = document.createTextNode('SI')
    option1.appendChild(texto1)
    let option2 = document.createElement('option')
    select.appendChild(option2)
    let texto2 = document.createTextNode('LM')
    option2.appendChild(texto2)
    let option3 = document.createElement('option')
    select.appendChild(option3)
    let texto3 = document.createTextNode('PROG')
    option3.appendChild(texto3)
}

//Función para añadir módulos 2DAW

function dosDaw() {
    //console.log('funciona');

    //Selecciona el párrafo de curso
    let pCurso = document.getElementById('pCurso')
    //Crea el br
    let br = document.createElement('br')
    pCurso.appendChild(br)
    //Crea el label
    let label = document.createElement('label')
    pCurso.appendChild(label)
    let textoLabel = document.createTextNode('Módulos 2DAW')
    label.appendChild(textoLabel)
    //Crea el select
    let select = document.createElement('select')
    pCurso.appendChild(select)
    //Crea los options
    let option1 = document.createElement('option')
    select.appendChild(option1)
    let texto1 = document.createTextNode('DWEC')
    option1.appendChild(texto1)
    let option2 = document.createElement('option')
    select.appendChild(option2)
    let texto2 = document.createTextNode('DIW')
    option2.appendChild(texto2)
    let option3 = document.createElement('option')
    select.appendChild(option3)
    let texto3 = document.createTextNode('DWES')
    option3.appendChild(texto3)
}

//Función para calcular la media y establacer dicho valor en el span

function media() {
    //Selecciona el span de la media
    let span = document.getElementById('spanMedia').textContent;

    /*console.log(span);*/

    


}

//Función para poner todos los valores a 0

function cero() {
    //console.log('funciona');

    //Selecciona los tres inputs tipo number y cambia su valor a cero
   
    let input1 = document.getElementById('iCalculo1').value = ('0')
    let input2 = document.getElementById('iCalculo2').value = ('0')
    let input3 = document.getElementById('iCalculo3').value = ('0')

}

media();


