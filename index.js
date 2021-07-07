var agemajorite = 21;
var age = parseInt(prompt("Quel âge as-tu?"));
if (age >= agemajorite) {
    document.write("Welcome to our website");

}else {
    alert("you are not allowed, go to this Homee page:");
    document.location.href = "https://www.doranco.fr";
}
