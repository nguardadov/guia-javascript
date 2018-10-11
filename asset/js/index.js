/*Ejercicio 1 */
var container = document.getElementById("c1");
container.innerText="Primer";
container.style.backgroundColor="#000000";
container.style.color="#1cb723";
container.style.height="200px";
container.style.width="200px";
container.innerHTML="<input type='text' placeholder='Escriba su texto'>";

/*Ejercicio 2*/

var containers = document.getElementsByClassName("c2");

Array.prototype.filter.call(containers, function(element)
{
    element.innerText="Primer";
});


/*Cambiar el color del elemento a rojo si este es par*/

Array.prototype.filter.call(containers, function(element)
{
    element.style.backgroundColor="gray";
});

/*cambie le tamaño de los elementos  width:200px; height:200px*/
Array.prototype.filter.call(containers, function(element)
{
    element.style.width="200px";
    element.style.height="200px";
});

/*Agregue una caja de texto */
Array.prototype.filter.call(containers, function(element)
{
    element.innerHTML="<input type='text' placeholder='Escriba su texto'>";
});


/*Ejercicio 3 Utilizando la propiedad getElementsByname() realice los anterior 
¿Que fue lo que cambio?
*/
/*Ejercio4 eventos */

/*al boton con el id btn-click agregele un evento que al momento de darle click 
este muestre un alert con el mensaje "hola mundo" */
var boton=document.getElementById("btn-click");

boton.onclick = function(evt)
{
    alert("Hola mundo");
}


/*copie el contenido del id='textMsj' al textarea que tiene el atributo id='showMsj*/
var btnCopy = document.getElementById('btnCopy');
btnCopy.onclick = function(evt)
{
    
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}


/*Parte 5 crear elementos */
//funcion para añadir elementos

var cantA = 5;
var nameElement = "a";
var url="https://www.google.com/";
for(let i=0; i<cantA; i++)
{
    document.write(`<${nameElement} href='${url}'>Enlaces</${nameElement}><br>`);
}

/*Esta funcion crear 5 divs */
var names = [
    {
        "name":"Nelson",
        "age":25
    },
    {
        "name":"Nathaly",
        "age":22
    },
    {
        "name":"Pedro",
        "age":20
    },
    {
        "name":"Douglas",
        "age":25
    },
    {
        "name":"Nestor",
        "age":24
    },
]

var namesTable = "<table border='1'><thead><tr><th>Name</th><th>Age</th></tr></thead><tbody>";

names.forEach(item =>{
    namesTable = namesTable + `<tr><td>${item.name}</td><td>${item.age}</td></tr>`;
})

document.write(namesTable);


