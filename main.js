
const inputNumber = document.getElementById("calulator");
const clearBtn = document.getElementById("clear")

inputNumber.addEventListener("keydown", function(event){
    event.preventDefault();
});

const links =  document.querySelectorAll(".myClick");

for( let i=0; i<links.length; i++){
    links[i].addEventListener("click", function(event){
        event.preventDefault();

        const linkText = event.target.textContent;
        const digit = linkText.match(/\d/);

        if (digit) {
        // append to current input value
            inputNumber.value += digit[0];
        }
    });
}

clearBtn.addEventListener("click", function(event){
    event.preventDefault();
    inputNumber.value = "";
})