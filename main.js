
const inputNumber = document.getElementById("calulator");
const clearBtn = document.getElementById("clear")
const calButton = document.getElementById("equal");

inputNumber.addEventListener("keydown", function(event){
    event.preventDefault();
});

const links =  document.querySelectorAll(".myClick");

for( let i=0; i<links.length; i++){
    links[i].addEventListener("click", function(event){
        event.preventDefault();

        const linkText = event.target.textContent;
        alert(linkText);
        inputNumber.value += linkText;
    });
}

clearBtn.addEventListener("click", function(event){
    event.preventDefault();
    inputNumber.value = "";
});

calButton.addEventListener("click", function(event){
    event.preventDefault();
    inputNumber.value = eval(inputNumber.value);
})

calButton.addEventListener("click", function(event){
    event.preventDefault();

    try{
        inputNumber.value = eval(inputNumber.value);
    }

    catch {
        inputNumber.value = "Error";
    }
})
