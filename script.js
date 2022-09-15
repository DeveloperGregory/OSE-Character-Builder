const tHead = document.getElementById('t-head'); 
const classInfo = document.getElementById('class-info');


const dataFile = 'class_data.csv';  

//function to pull in csv file
async function testData(){
  const newData = await d3.csv(dataFile)
  .then(d => {
    console.log(d)
    tableHeader(d.columns);
    printOut(d)
    return d
  })
  .catch(err => console.log(err));
  return newData
}

//function to label the table columns
function tableHeader(col){
  //object to display instead of no space csv headings
  let saveChg = {
    "deathPoison" : "D†",
    "wands" : "W†",
    "paralaysisPetrification" : "P†",
    "breath" : "B†",
    "spellsRodsStaves" : "S†"
  }
  let display = "" //becomes the element if the element is one of the object keys then display changes to the object value
  col.forEach(element => {
    console.log(element)
    if(element != 'dieType' && element != 'numDie' && element != 'bonusHP'){
      if(element == 'deathPoison' || element == 'wands' || element == 'paralaysisPetrification' || element == 'breath' || element == 'spellsRodsStaves'){
        display = saveChg[element];
      }else{
        display = element;
      }
      tHead.innerHTML = tHead.innerHTML + `<th id='${element}'>${display.toUpperCase()}</th>`;
    }
    
  });
}

function printOut(data){
  let highlight = false;
  let hlTag = ''
  
  for(let i = 0; i < data.length; i++){
    classInfo.innerHTML = classInfo.innerHTML + `<tr class='${hlTag}'>
      <td>${data[i].class}</td>
      <td>${data[i].level}</td>
      <td>${data[i].XP}</td>
      <td>${data[i].hitDice}</td>
      <td>${data[i].THAC0}</td>
      <td>${data[i].toHit}</td>
      <td>${data[i].deathPoison}</td>
      <td>${data[i].wands}</td>
      <td>${data[i].paralaysisPetrification}</td>
      <td>${data[i].breath}</td>
      <td>${data[i].spellsRodsStaves}</td>
      <td>${data[i].cs}</td>
      <td>${data[i].fa}</td>
      <td>${data[i].hs}</td>
      <td>${data[i].ms}</td>
      <td>${data[i].tw}</td>
      <td>${data[i].feature1}</td>}
      </tr>`;
    if(highlight == false){
      hlTag = 'highlight'
      highlight = true;
    }else{
      hlTag = '';
      highlight = false;
    }
  }
}
    

testData();


