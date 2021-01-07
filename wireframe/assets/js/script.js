document.getElementById("game").style.visibility = "hidden"; 
$(".start-game").click(function(){
    let input = "<form><input placeholder='Enter your name'/><form>"
    let nameField = document.getElementById("enter-name")
    nameField.appendChild(input)
})