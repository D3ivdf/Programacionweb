function nombre(){
    var nom = document.getElementById("Inputnombre").value;
    let resultado = nom.toUpperCase();
    if(nom.length>0){
        window.alert(`Tu nombre es ${resultado}`)
    }else{
        window.alert("Error")
    }
}
function shows()
{
    radio = document.getElementById("flexRadioDefault1");
    element = document.getElementById("content");
    if (radio.checked) {
        element.style.display = "block";
        element.innerHTML=`<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
         curso web basico
        </label>
    </div>
    <br>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
        <label class="form-check-label" for="flexCheckDefault">
         curso web avansado
        </label>
    </div>`;
    }
    else{
        element.innerHTML=``;
    }
}
function comparar(){
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;
    if(pass1 === pass2){
        document.getElementById("password1").style.borderColor = "green";
        document.getElementById("password2").style.borderColor = "green";
    }else{
        document.getElementById("password1").style.borderColor = "red";
        document.getElementById("password2").style.borderColor = "red";
    }

}
function vacio(){
    let boton= document.getElementById('boton').disabled = false;
    let correo = document.getElementById('email').value;
    let email=correo.trim();
    if((correo.length==0)){
        document.getElementById('boton').style.borderColor = 'red';
        document.getElementById('email').disabled=true;
    }
    else{
        document.getElementById('boton').style.borderColor = 'green';
    }
}