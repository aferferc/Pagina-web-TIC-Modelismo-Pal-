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
                event.preventDefault(); 
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

   const navLinks = document.querySelectorAll("nav a");
let i = 0; 
while (i < navLinks.length) {
    const link = navLinks[i]; 
    link.addEventListener("mouseover", function() {
        this.style.color = "red"; 
    });
    link.addEventListener("mouseout", function() {
        this.style.color = "";
    });
    i++;
}


let logo = document.getElementsByClassName("logo")[0];
let colores = ["red", "blue", "green", "yellow", "purple", "orange"];
let timerRGB = null;

if (logo) {
    logo.addEventListener("mouseover", function() {
        timerRGB = setInterval(() => {
            for (let i = 0; i < colores.length; i++) { 
                setTimeout(() => {
                    let colorActual = colores[i];
                    document.querySelectorAll(".boton-nav, summary, header").forEach(elemento => {
                        elemento.style.color = colorActual;
                    });
                    document.querySelectorAll("hr").forEach(hr => {
                        hr.style.borderColor = colorActual;
                    });

                }, i * 200); //acuerdate, esto eran ms
            }
        }, colores.length * 200); //acuerdate, esto eran ms
    });
    logo.addEventListener("mouseout", function() {
        clearInterval(timerRGB); 
        intervalId = null; 
        document.querySelectorAll(".boton-nav, summary, header").forEach(elemento => {
            elemento.style.color = "#bf8a3d";
        });
        document.querySelectorAll("hr").forEach(hr => {
            hr.style.borderColor = "#bf8a3d";
        });
    });
};
