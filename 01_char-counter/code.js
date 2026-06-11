const counter = document.getElementById("input-count");
const input = document.getElementById("story");

function charCounter() {
    if(!input) return;
    
    input.addEventListener("input", function() {
        const currentChars = input.value.length;
        
        if (counter) {
            counter.textContent = currentChars + " / 50";
            counter.classList.toggle("error", currentChars >= 50);
        }
    })
}

charCounter();