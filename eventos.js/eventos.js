document.getElementsByClassName("form-ini").addEventListener("submit", function(event){
    let usuario = String(document.getElementById("usu-ini-in").value);
    let email = String(document.getElementById("email-ini-in").value);
    let contrasena = String(document.getElementById("cont-ini-in").value);

    if(usuario === "" || usuario.length() > 10){
        alert("No as introducido el usuario o este es mayor de 8 caracteres")
        event.preventDefault();
    }
    else if(email ==="" || email.includes("@gmail.com") == false){
        alert("No as introducido el email o este no acaba en @gmail.com")
        event.preventDefault();
    }
    else if(contrasena ==="" || contrasena.length() < 8){
        alert("No as introducido el email o este no acaba en @gmail.com")
        event.preventDefault();
    }


});
