const bdDom = document.body;
const reLdBtn = document.getElementById('reLoad');




function updateForm(){
    const d = new Date();
    console.log("Form Updated " + d.getTime());
}

function displayData(data){
    console.log(data["3"]["str"])
}

fetch("abil_mods.json")
    .then(response => response.json())
    .then(json => displayData(json));

bdDom.addEventListener("change",updateForm); //updates the form
reLdBtn.addEventListener('click', () => location.reload());  //reloads the page
