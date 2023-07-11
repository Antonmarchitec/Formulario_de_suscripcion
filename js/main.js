//let form__label_error = document.querySelector("#form__label_error")

//funcion
const validarCorreo = () =>{
    let correo = document.querySelector("#campoInput").value
    let patron = /^[\w\.-]+@[\w\.-]+\.\w+$/;

    if (patron.test(correo)) {
        //console.log("puedes entrar")
        cont__poppup.classList.add("cont__poppup__js")
        form__label_error.classList.remove("form__label_error_JS")
        campoInput.style.background = "transparent"
        campoInput.style.color = "grey" 
        campoInput.style.border = "2px solid hsl(231, 7%, 60%)"    

    } else {
        //console.log("no puedes entrar")
        //cont__poppup__exit.classList.add("cont__poppup__exit__js")
        form__label_error.classList.add("form__label_error_JS")
        campoInput.style.background = "hsl(4, 100%, 88%)"
        campoInput.style.color = "red" 
        campoInput.style.border = "2px solid #fb7c7c"
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