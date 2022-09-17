
const bdDom = document.body;
//define all html buttons
const reLdBtn = document.getElementById('reLoad');
const rollStatsBtn = document.getElementById('roll-em')

//define ability input boxes
const strBox = document.getElementById('pc-str');
const intBox = document.getElementById('pc-int')
const wisBox = document.getElementById('pc-wis');
const dexBox = document.getElementById('pc-dex');
const conBox = document.getElementById('pc-con');
const chaBox = document.getElementById('pc-cha');

//define input boxes for sheet
const meleeBox = document.getElementById('melee');
const missileBox = document.getElementById('missile');
const odBox = document.getElementById("od");
const pcBonusS = document.getElementById("pc-bonus-s");
const acBonus = document.getElementById('ac-bonus');
const initBox = document.getElementById('init');
const hpBonus = document.getElementById("hp-bonus")


//ability benefits object
const abilData = {
    "3" : {
        "str" : {
            "melee" : -3,
            "od" : 1
        },
        "int" : {
            "lang" : "Native (Broken Speech)",
            "literacy" : "Illiterate"
        },
        "dex" : {
            "ac" : -3,
            "missile": -3,
            "init" : -2
        },
        "wis" : {
            "magic" : -3
        },
        "con" : {
            "hp" : -3
        },
        "cha" : {
            "npcRe" : -2,
            "maxRe" : 1,
            "reLoyal" : 4
        },
        "primeReq" : {
            "xpMod" : -0.2
        }
    },
    "4" : {
        "str" : {
            "melee" : -2,
            "od" : 1
        },
        "int" : {
            "lang" : "Native",
            "literacy" : "Illiterate"
        },
        "dex" : {
            "ac" : -2,
            "missile": -2,
            "init" : -1
        },
        "wis" : {
            "magic" : -2
        },
        "con" : {
            "hp" : -2
        },
        "cha" : {
            "npcRe" : -1,
            "maxRe" : 2,
            "reLoyal" : 5
        },
        "primeReq" : {
            "xpMod" : -0.2
        }
    },
    "5" : {
        "str" : {
            "melee" : -2,
            "od" : 1
        },
        "int" : {
            "lang" : "Native",
            "literacy" : "Illiterate"
        },
        "dex" : {
            "ac" : -2,
            "missile": -2,
            "init" : -1
        },
        "wis" : {
            "magic" : -2
        },
        "con" : {
            "hp" : -2
        },
        "cha" : {
            "npcRe" : -1,
            "maxRe" : 2,
            "reLoyal" : 5
        },
        "primeReq" : {
            "xpMod" : -0.2
        }
    },
    "6" : {
        "str" : {
            "melee" : -1,
            "od" : 1
        },
        "int" : {
            "lang" : "Native",
            "literacy" : "Basic"
        },
        "dex" : {
            "ac" : -1,
            "missile": -1,
            "init" : -1
        },
        "wis" : {
            "magic" : -1
        },
        "con" : {
            "hp" : -1
        },
        "cha" : {
            "npcRe" : -1,
            "maxRe" : 3,
            "reLoyal" : 6
        },
        "primeReq" : {
            "xpMod" : -0.1
        }
        }
    };





function updateForm(){
    //make sure number of stat is a number and in the range of 3-18
    if(strBox.value > 2 && strBox.value < 7){
        //handling bonuses granted by str
        meleeBox.value = abilData[strBox.value].str.melee;
        odBox.value = abilData[strBox.value].str.od;
        //handling bonuses granted by wis
        pcBonusS.value = abilData[wisBox.value].wis.magic;
        //handling bonuses granted by dex
        missileBox.value = abilData[dexBox.value].dex.missile;
        acBonus.value = abilData[dexBox.value].dex.ac;
        initBox.value = abilData[dexBox.value].dex.init;
        //handling bonuses granted by con
        hpBonus.value = abilData[conBox.value].con.hp;

    }
}

function getRandom(num){
    return Math.floor(Math.random() * num + 1);
}

function rollStats(){
    let abilities = [];
    let dice = []
    for(let i=0; i < 6; i++){
        for(let n=0; n < 3; n++){
            dice.push(getRandom(6));
        }
        abilities.push(dice.reduce((a, b) => a + b, 0));
        dice = [];
        
    }
    console.log(abilities)
    strBox.value = abilities[0];
    intBox.value = abilities[1];
    wisBox.value = abilities[2];
    dexBox.value = abilities[3];
    conBox.value = abilities[4];
    chaBox.value = abilities[5];

    updateForm();
}


updateForm();

bdDom.addEventListener("change",updateForm); //updates the form
reLdBtn.addEventListener('click', () => location.reload());  //reloads the page
rollStatsBtn.addEventListener('click', rollStats)
