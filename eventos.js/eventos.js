document.addEventListener("DOMContentLoaded", function () {

    const formIni = document.querySelector(".form-ini");
    if (formIni) {
        formIni.addEventListener("submit", function (event) {
            let usuarioIni = String(document.getElementById("usu-ini-in").value);
            let emailIni = String(document.getElementById("email-ini-in").value);
            let contrasenaIni = String(document.getElementById("cont-ini-in").value);

            if (
                usuarioIni.toLowerCase() === "fallout" &&
                emailIni.toLowerCase() === "fallout" &&
                contrasenaIni.toLowerCase() === "fallout"
            ) {
                alert("¡Tienes un excelente gusto! Fallout es una obra maestra.");
                event.preenDefault(); 
                return; 
            }

            if (usuarioIni === "" || usuarioIni.length > 10) {
                alert("No has introducido el usuario o este es mayor de 10 caracteres");
                event.preventDefault();
            } else if (emailIni === "" || !emailIni.includes("@gmail.com")) {
                alert("No has introducido el email o este no acaba en @gmail.com");
                event.preventDefault();
            } else if (contrasenaIni === "" || contrasenaIni.length < 8) {
                alert("No has introducido la contraseña o esta tiene menos de 8 caracteres");
                event.preventDefault();
            }
        });
    }

    const formReg = document.querySelector(".form-reg");
    if (formReg) {
        formReg.addEventListener("submit", function (event) {
            let usuarioReg = String(document.getElementById("usu-reg-in").value);
            let emailReg = String(document.getElementById("email-reg-in").value);
            let contrasenaReg = String(document.getElementById("cont-reg-in").value);
            let contrasenaConReg = String(document.getElementById("conf-cont-reg-in").value);

            if (
                usuarioReg.toLowerCase() === "fallout" &&
                emailReg.toLowerCase() === "fallout" &&
                contrasenaReg.toLowerCase() === "fallout" &&
                contrasenaConReg.toLowerCase() === "fallout"
            ) {
                alert("¡Tienes un excelente gusto! Fallout es una obra maestra.");
                event.preventDefault(); 
                return; 
            }

            if (usuarioReg === "" || usuarioReg.length > 10) {
                alert("No has introducido el usuario o este es mayor de 10 caracteres");
                event.preventDefault();
            } else if (emailReg === "" || !emailReg.includes("@gmail.com")) {
                alert("No has introducido el email o este no acaba en @gmail.com");
                event.preventDefault();
            } else if (contrasenaReg === "" || contrasenaReg.length < 8) {
                alert("No has introducido la contraseña o esta tiene menos de 8 caracteres");
                event.preventDefault();
            } else if (contrasenaConReg === "" || contrasenaConReg.length < 8) {
                alert("No has introducido la contraseña de confirmación o esta tiene menos de 8 caracteres");
                event.preventDefault();
            } else if (contrasenaReg !== contrasenaConReg) {
                alert("La contraseña y la contraseña de confirmación no coinciden");
                event.preventDefault();
            }
        });
    }
});


