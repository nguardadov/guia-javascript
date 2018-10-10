/*Ejercicio 1 */
var container = document.getElementById("c1");
container.innerText="Primer";
container.style.backgroundColor="gray";
container.style.color="#1cb723";
container.style.height="200px";
container.style.width="200px";
container.innerHTML="<input type='text' placeholder='Escriba su texto'>";

/*Ejercicio 2*/

var containers = document.getElementsByClassName("c2");

for(let i=0 ; i<containers.length; i++)
{
    containers[i].innerText="Primer";
}


/*Cambiar el color del elemento a rojo si este es par*/
for(let i=0 ; i<containers.length; i++)
{
    
    if(i%2 == 0)
    {
        containers[i].style.backgroundColor="red";
    }
}