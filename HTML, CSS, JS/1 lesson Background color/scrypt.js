let index = 0;

function changeColor(){
    let colors = ["red", "blue", "green", "orange", "pink", "yellow"];
if(index > colors.length - 1)
    index = 0;
else
document.getElementsByTagName("body")[0].style.background = colors[index++];



}