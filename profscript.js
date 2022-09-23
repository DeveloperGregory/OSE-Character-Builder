const addBtn = document.getElementById('add');
const showBtn = document.getElementById('show');
const profBox = document.getElementById('profession');
const toolBox = document.getElementById('tool');
const itemBox = document.getElementById('item');

let profs = {"profession" : {}}



function show(y){
    let newArr = y.split("\r");
    let temp = []
    for(let i = 0; i < newArr.length; i++){
        newArr[i] = newArr[i].replace("\n","")
        temp = newArr[i].split(",");
        profs["profession"][temp[0]] = {"tool" : temp[1], "item" : temp[2]}
    }

    console.log(profs)
    //console.log(profs)
}

function addProf(){
    let profession = profBox.value;
    let tool = toolBox.value;
    let item = itemBox.value;
    profs["profession"][profession] = {"tool" : tool, "item" : item};
    profBox.value = "";
    toolBox.value = "";
    itemBox.value = "";
}

fetch("profs.txt")
    .then(data => data.text())
    .then(y => show(y));

showBtn.addEventListener('click', show)
addBtn.addEventListener('click', addProf)
