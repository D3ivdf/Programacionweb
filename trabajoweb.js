function nombre(){
    var nom = document.getElementById("Inputnombre").value;
    let resultado = nom;
    if(nom.length>0){
        window.alert(`Tu nombre es ${resultado}`)
    }else{
        window.alert("Error")
    }
}
function shows()
{
    element = document.getElementById("content");
    radio = document.getElementById("flexRadioDefault1");
    if (radio.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}
function comparar(){
    let pass1 = document.getElementById("password1");
    let pass2 = document.getElementById("password2");
    if(pass1.value != pass2.value){

    }else{
        
    }

}