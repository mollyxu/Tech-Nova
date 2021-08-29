let goals = [];
function toggleColour(btn){
    let button = document.getElementById(btn.id);
    if (button.style.backgroundColor === "rgb(254, 241, 188)"){
        button.style.backgroundColor = "#FFD99F";
        goals.push(button.id);
    }
    else{
        button.style.backgroundColor = "#FEF1BC";
        goals.splice(goals.indexOf(button.id), 1);
    }
}