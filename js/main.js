let form__buttom = document.querySelector("#form__buttom")
//let cont__poppup = document.querySelector("#cont__poppup")
//let cont__poppup__exit = document.querySelector("#cont__poppup__exit")
let poppup__btn = document.querySelector("#poppup__btn")



const validarCorreo = () =>{
    let correo = document.querySelector("#campoInput").value
    let patron = /^[\w\.-]+@[\w\.-]+\.\w+$/;

    if (patron.test(correo)) {
        console.log("puedes entrar")
        cont__poppup.classList.add("cont__poppup__js")
    } else {
        console.log("no puedes entrar")
        cont__poppup__exit.classList.add("cont__poppup__exit__js")
    }
}

form__buttom.addEventListener("click", () =>{
    validarCorreo() 
})



document.querySelector("#poppup__btn").addEventListener("click", ()=>{
    console.log("salir")
    cont__poppup.classList.remove("cont__poppup__js")
})

document.querySelector("#poppup__btn__exit").addEventListener("click", ()=>{
    console.log("salir")
    cont__poppup__exit.classList.remove("cont__poppup__exit__js")
})
