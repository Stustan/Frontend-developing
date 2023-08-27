document.addEventListener("DOMContentLoaded", function(event) {
    const toDoItems = document.querySelector(".to-do-items");
    const input = document.querySelector("#input");
    const trashIcon = document.querySelector("#trash");

    input.addEventListener("keydown", function(event){
        if(event.key === "Enter")
            addItem();
    })

    addItem = () =>{
        let divParent = document.createElement("div");
        let divChild = document.createElement("div");
        let checkIcon = document.createElement("i");
        let trashIcon = document.createElement("i");

        divParent.className = "item";
        divParent.innerHTML = '<div>'+input.value+'</div>';

        checkIcon.className = "fa-solid fa-file-check";
        checkIcon.style.color = "lightgray";
        checkIcon.addEventListener("click", function(){
            checkIcon.style.color = "limegreen";
            console.log('checkIcon');
        })

        divChild.appendChild(checkIcon);
        console.log('appended');

        trashIcon.className = "fa-solid fa-trash-can-xmark";
        trashIcon.style.color = "darkgray";
        trashIcon.addEventListener("click", function(){
            divParent.remove();
            console.log('trashIcon');
        })

        divChild.appendChild(trashIcon);
        console.log('tI appended');

        divParent.appendChild(divChild);
        console.log('Child Appended');

        toDoItems.appendChild(divParent);
        console.log('Parent appended');

        input.value = '';
    }
})