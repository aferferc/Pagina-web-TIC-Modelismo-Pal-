document.getElementsByClassName("form-ini").addEventListener("submit", function(event){
    let usuarioIni = String(document.getElementById("usu-ini-in").value);
    let emailIni = String(document.getElementById("email-ini-in").value);
    let contrasenaIni = String(document.getElementById("cont-ini-in").value);

    if(usuarioIni === "" || usuarioIni.length() > 10){
        alert("No has introducido el usuario o este es mayor de 8 caracteres");
        event.preventDefault();
    }
    else if(emailIni === "" || emailIni.includes("@gmail.com") == false){
        alert("No has introducido el email o este no acaba en @gmail.com");
        event.preventDefault();
    }
    else if(contrasenaIni === "" || contrasenaIni.length() < 8){
        alert("No has introducido la contraseña o esta tiene menos de 8 caracteres");
        event.preventDefault();
    }
});

document.getElementsByClassName("form-reg").addEventListener("submit", function(event){
    let usuarioReg = String(document.getElementById("usu-ini-in").value);
    let emailReg = String(document.getElementById("email-ini-in").value);
    let contrasenaReg = String(document.getElementById("cont-ini-in").value);
    let contrasenaConReg = String(document.getElementById("conf-cont-reg-in").value);

    if(usuarioReg === "" || usuarioReg.length() > 10){
        alert("No has introducido el usuario o este es mayor de 8 caracteres");
        event.preventDefault();
    }
    else if(emailReg === "" || emailReg.includes("@gmail.com") == false){
        alert("No has introducido el email o este no acaba en @gmail.com");
        event.preventDefault();
    }
    else if(contrasenaReg === "" || contrasenaReg.length() < 8){
        alert("No has introducido la contraseña o esta tiene menos de 8 caracteres");
        event.preventDefault();
    }
    else if(contrasenaConReg === "" || contrasenaConReg.length() < 8){
        alert("No has introducido la contraseña de confirmacion o esta tiene menos de 8 caracteres");
        event.preventDefault();
    }
    else if(contrasenaReg != contrasenaConReg){
        alert("La contraseña y la contraseña de confirmacion no coinciden");
        event.preventDefault();
    }
});
