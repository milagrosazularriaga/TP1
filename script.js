document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeColorButton");

    button.addEventListener("click", function() {
        document.body.style.backgroundColor = 
            document.body.style.backgroundColor === "lightgray" ? "#f8f8f8" : "lightgray";
    });
});