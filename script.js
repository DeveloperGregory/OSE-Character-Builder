const strLabel = document.getElementById('str');
const intLabel = document.getElementById('int');
const wisLabel = document.getElementById('wis');
const dexLabel = document.getElementById('dex');
const conLabel = document.getElementById('con');
const chaLabel = document.getElementById('cha');


const rollBtn = document.getElementById('rollButton');

let stats = {
    'Strength' : 0,
    'Intelligence' : 0,
    'Wisdom' :  0,
    'Dexterity': 0,
    'Constitution' : 0,
    'Charisma' : 0
}

function dice(){
    let roll = 0;
    for(let i = 0;i<=2;i++){
        let newRoll = Math.floor(Math.random() * 6 + 1)
        console.log(newRoll)
        roll = roll + newRoll;
        
    }
    return roll;
} 
 
function rollStats(){
    for (let stat in stats){
        stats[stat] = dice();
    }
    
    strLabel.innerHTML = 'Strength: ' +  stats['Strength'];
    intLabel.innerHTML = 'Intelligence: ' +  stats['Intelligence'];
    wisLabel.innerHTML = 'Wisdom: ' +  stats['Wisdom'];
    dexLabel.innerHTML = 'Dexterity: ' +  stats['Dexterity'];
    conLabel.innerHTML = 'Constitution: ' + stats['Constitution'];
    chaLabel.innerHTML = 'Charisma: ' +  stats['Charisma'];
}

rollBtn.addEventListener('click', rollStats);