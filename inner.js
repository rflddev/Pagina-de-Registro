const form = document.getElementById("form");
const username= document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
})

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha um username")
    }else{
        const formItem = username.parentElement;
        formItem.classList = "form-content"
    }
}


function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Preencha com seu email ")
    }else{
        const formItem = email.parentElement;
        formItem.classList = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Preencha com seu email ")
    }else{
        const formItem = email.parentElement;
        formItem.classList = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatoria ")
    }else if(passwordValue.lenght < 8){
        errorInput(password, "A senha deve ter no mínimo 8 caracteres.")
    }else{    
        const formItem = password.parentElement;
        formItem.classList = "form-content"
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-content error"
}