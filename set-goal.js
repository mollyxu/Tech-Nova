function toggleColour(btn){
    let button = document.getElementById(btn.id);
    if (button.style.backgroundColor === "rgb(255, 236, 207)"){
        button.style.backgroundColor = "#FFD99F";
    }
    else{
        button.style.backgroundColor = "#FFECCF";
    }
}