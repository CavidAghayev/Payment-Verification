let nameD = document.querySelector("#name")
let surname = document.querySelector("#surname")
let cardNumber = document.querySelector("#cardNumber")
let date = document.querySelector("#date")
let cvv = document.querySelector("#cvv")
let submit = document.querySelector("#submit")
let inputs = document.querySelectorAll("input")
let modalShow = document.querySelector(".modalShow")

submit.addEventListener("click", function(e) {
    e.preventDefault();
    modalShow.style.display = "flex"
    if(document.querySelector(
        ""
    ))
    document.querySelector(".card").style.display = "none"
    document.querySelector("form").style.display = "none"
  document.querySelector(".modalShow span").innerHTML = "Ödəniş uğurla həyata keçirildi."
    })

for(let i = 0; i<inputs.length; i++){
    inputs[i].style.borderColor = "red"
    inputs[inputs.length-1].style.borderColor = "none"
    inputs[0].addEventListener("keyup", function(e) {
        e.target.value = e.target.value.match(/[^0-9]+/g, '')
        e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
        if(e.target.value.length>2){    
            e.target.style.borderColor = "rgb(210, 210, 210)"
        }
        else{
            e.target.style.borderColor = "red"
        }
        document.querySelector(".card-own-name h6").innerHTML = e.target.value
        if(e.target.value == ""){
            document.querySelector(".card-own-name h6").innerHTML = "Javid Aghayev"
        }
        console.log(e.target.value);
        })
        
        inputs[1].addEventListener("keyup", function(e) {
            e.target.value = e.target.value.match(/[^0-9]+/g, '')
            e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
            if(e.target.value.length>2){
            e.target.style.borderColor = "rgb(210, 210, 210)"
            }
            else{
                e.target.style.borderColor = "red"
            }
        document.querySelector(".card-own-name h6").innerHTML = nameD.value + " " + e.target.value
        })
        
        inputs[2].addEventListener("keyup", function(e) {
        e.target.value = e.target.value.match(/[^a-zA-Z]+/g, '')
        if(e.target.value.length == 4 ){
            e.target.value = e.target.value + " ";
        }
        else if(e.target.value.length == 9){
            e.target.value = e.target.value + " "
        }
        else if(e.target.value.length == 14){
            e.target.value = e.target.value + " ";
        }
        if(e.target.value.length == 19){
            e.target.style.borderColor = "rgb(210, 210, 210)"
        }
        else{
            e.target.style.borderColor = "red"
        }
        if(e.target.value[0] == 4){
            document.querySelector(".card").style.backgroundColor = "rgb(0, 0, 32)"
        document.querySelector(".card-number span").style.color = "red"
        document.querySelector(".card").style.transition = "1s"
        document.querySelector(".card").style.boxShadow = "1px 5px 5px 1px gray"
        }
        else{
            document.querySelector(".card").style.backgroundColor = "gray"
        document.querySelector(".card-number span").style.color = "white"
        document.querySelector(".card").style.boxShadow = "1px 5px 5px 1px rgb(50, 50, 50)"
        }
        document.querySelector(".card-code p").innerHTML = e.target.value
        if(e.target.value == ""){
            document.querySelector(".card-code p").innerHTML = "0123 4567 8910 1112"
        }
        })  
        
        inputs[3].addEventListener("keyup", function(e) {
        e.target.value = e.target.value.match(/[^a-zA-Z]+/g, '')
        if(e.target.value.length == 2){
            e.target.value = e.target.value + "/";
        }
        if(e.target.value.length == 5){
            e.target.style.borderColor = "rgb(210, 210, 210)"
        }
        else{
            e.target.style.borderColor = "red"
        }
        document.querySelector(".card-code span").innerHTML = e.target.value
        if(e.target.value == ""){
            document.querySelector(".card-code span").innerHTML = "01/23"
        }
        })
        
        inputs[4].addEventListener("keyup", function(e) {
        e.target.value = e.target.value.match(/[^a-zA-Z]+/g, '')
        if(e.target.value.length == 3){
            e.target.style.borderColor = "rgb(210, 210, 210)"
        }
        else{
            e.target.style.borderColor = "red"
        }
        })
    }
