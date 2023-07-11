
//funcion
const validarCorreo = () =>{
    let correo = document.querySelector("#campoInput").value
    let patron = /^[\w\.-]+@[\w\.-]+\.\w+$/;

    if (patron.test(correo)) {
        //console.log("puedes entrar")
        cont__poppup.classList.add("cont__poppup__js")
    } else {
        //console.log("no puedes entrar")
        cont__poppup__exit.classList.add("cont__poppup__exit__js")
    }
}


//Delegando eventos
document.addEventListener("click", (e)=>{
    if(e.target.id === "form__buttom"){
        validarCorreo()
    }else if(e.target.id === "poppup__btn"){
        //console.log("salir")
        cont__poppup.classList.remove("cont__poppup__js")
    }else if(e.target.id === "poppup__btn__exit"){
        //console.log("salir")
        cont__poppup__exit.classList.remove("cont__poppup__exit__js")
    }
})