let form__buttom = document.querySelector("#form__buttom")
let cont__poppup = document.querySelector("#cont__poppup")








const validarCorreo = () =>{
    let correo = document.querySelector("#campoInput").value
    let patron = /^[\w\.-]+@[\w\.-]+\.\w+$/;

    if (patron.test(correo)) {
        console.log("puedes entrar")
    } else {
        console.log("no puesdes entrar")
    }
}

form__buttom.addEventListener("click", () =>{
    validarCorreo()
})
