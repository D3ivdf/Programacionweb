/*console.log("hola mundo")
prompt("Ejercicio Hola")
document.write("Hola mundo", "")
for(let i =0; i<19; i++){
    console.log(i);
}*/
var boton = document.getElementById("boton1");
boton.style.display = "none";
function suma(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    if(num1.length>0 && num2.length>0){
        boton.style.display="block";
        num1 = parseInt(num1);
        num2 = parseInt(num1);
        let resultado = num1 + num2;
        let respuesta = document.getElementById("respuesta");
        respuesta.innerHTML = `<label>El resultado es: ${resultado}</label>`;
    }else{
        boton.style.display="none";
    }
}
function verificar(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    if(num1.length>0 && num2.length>0){
        boton.style.display = "block";
    }else{
        boton.style.display = "none";
    }

}

