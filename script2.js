
const bdDom = document.body;
//define all html buttons
const reLdBtn = document.getElementById('reLoad');
const rollStatsBtn = document.getElementById('roll-em');
const getProfBtn = document.getElementById('prof-btn');

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
const hpBonus = document.getElementById("hp-bonus");
const maxHpBox = document.getElementById('max-hp');
const hpBox = document.getElementById('pc-hp');
const rolledHPBox = document.getElementById('rolled-HP');
const levelBox = document.getElementById('pc-level');
const hdSelect = document.getElementById('hit-die');
const profBox = document.getElementById('pc-prof');
const aswText = document.getElementById('asw-text');
const unBox = document.getElementById('un');
const initMod = document.getElementById('init-mod');

const statMin = 55;

// Variables for adding inputbox values
let rolledHP = 1;
let bonusHP = 0;
let addedHP = 0;
let level = 1;
let hitDie = 4;
let profs = {"profession" : {}};

let statsAgain = false;

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
    },
    "7" : {
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
    },
    "8" : {
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
    },
    "9" : {
        "str" : {
            "melee" : 0,
            "od" : 2
        },
        "int" : {
            "lang" : "Native",
            "literacy" : "Literate"
        },
        "dex" : {
            "ac" : 0,
            "missile": 0,
            "init" : 0
        },
        "wis" : {
            "magic" : 0
        },
        "con" : {
            "hp" : 0
        },
        "cha" : {
            "npcRe" : 0,
            "maxRe" : 4,
            "reLoyal" : 7
        },
        "primeReq" : {
            "xpMod" : 0
        }
    },
    "10" : {
        "str" : {
            "melee" : 0,
            "od" : 2
        },
        "int" : {
            "lang" : "Native",
            "literacy" : "Literate"
        },
        "dex" : {
            "ac" : 0,
            "missile": 0,
            "init" : 0
        },
        "wis" : {
            "magic" : 0
        },
        "con" : {
            "hp" : 0
        },
        "cha" : {
            "npcRe" : 0,
            "maxRe" : 4,
            "reLoyal" : 7
        },
        "primeReq" : {
            "xpMod" : 0
        }
    },
    "11" : {
        "str" : {
            "melee" : 0,
            "od" : 2
        },
        "int" : {
            "lang" : "Native",
            "literacy" : "Literate"
        },
        "dex" : {
            "ac" : 0,
            "missile": 0,
            "init" : 0
        },
        "wis" : {
            "magic" : 0
        },
        "con" : {
            "hp" : 0
        },
        "cha" : {
            "npcRe" : 0,
            "maxRe" : 4,
            "reLoyal" : 7
        },
        "primeReq" : {
            "xpMod" : 0
        }
    },
    "12" : {
        "str" : {
            "melee" : 0,
            "od" : 2
        },
        "int" : {
            "lang" : "Native",
            "literacy" : "Literate"
        },
        "dex" : {
            "ac" : 0,
            "missile": 0,
            "init" : 0
        },
        "wis" : {
            "magic" : 0
        },
        "con" : {
            "hp" : 0
        },
        "cha" : {
            "npcRe" : 0,
            "maxRe" : 4,
            "reLoyal" : 7
        },
        "primeReq" : {
            "xpMod" : 0
        }
    },
    "13" : {
        "str" : {
            "melee" : 1,
            "od" : 3
        },
        "int" : {
            "lang" : "Native + 1",
            "literacy" : "Literate"
        },
        "dex" : {
            "ac" : 1,
            "missile": 1,
            "init" : 1
        },
        "wis" : {
            "magic" : 1
        },
        "con" : {
            "hp" : 1
        },
        "cha" : {
            "npcRe" : 1,
            "maxRe" : 5,
            "reLoyal" : 8
        },
        "primeReq" : {
            "xpMod" : 0.05
        }
    }
    ,
    "14" : {
        "str" : {
            "melee" : 1,
            "od" : 3
        },
        "int" : {
            "lang" : "Native + 1",
            "literacy" : "Literate"
        },
        "dex" : {
            "ac" : 1,
            "missile": 1,
            "init" : 1
        },
        "wis" : {
            "magic" : 1
        },
        "con" : {
            "hp" : 1
        },
        "cha" : {
            "npcRe" : 1,
            "maxRe" : 5,
            "reLoyal" : 8
        },
        "primeReq" : {
            "xpMod" : 0.05
        }
    },
    "15" : {
        "str" : {
            "melee" : 1,
            "od" : 3
        },
        "int" : {
            "lang" : "Native + 1",
            "literacy" : "Literate"
        },
        "dex" : {
            "ac" : 1,
            "missile": 1,
            "init" : 1
        },
        "wis" : {
            "magic" : 1
        },
        "con" : {
            "hp" : 1
        },
        "cha" : {
            "npcRe" : 1,
            "maxRe" : 5,
            "reLoyal" : 8
        },
        "primeReq" : {
            "xpMod" : 0.05
        }
    },
    "16" : {
        "str" : {
            "melee" : 2,
            "od" : 4
        },
        "int" : {
            "lang" : "Native + 2",
            "literacy" : "Literate"
        },
        "dex" : {
            "ac" : 2,
            "missile": 2,
            "init" : 1
        },
        "wis" : {
            "magic" : 2
        },
        "con" : {
            "hp" : 2
        },
        "cha" : {
            "npcRe" : 1,
            "maxRe" : 6,
            "reLoyal" : 9
        },
        "primeReq" : {
            "xpMod" : 0.1
        }
    },
    "17" : {
        "str" : {
            "melee" : 2,
            "od" : 4
        },
        "int" : {
            "lang" : "Native + 2",
            "literacy" : "Literate"
        },
        "dex" : {
            "ac" : 2,
            "missile": 2,
            "init" : 1
        },
        "wis" : {
            "magic" : 2
        },
        "con" : {
            "hp" : 2
        },
        "cha" : {
            "npcRe" : 1,
            "maxRe" : 6,
            "reLoyal" : 9
        },
        "primeReq" : {
            "xpMod" : 0.1
        }
    },
    "18" : {
        "str" : {
            "melee" : 3,
            "od" : 5
        },
        "int" : {
            "lang" : "Native + 3",
            "literacy" : "Literate"
        },
        "dex" : {
            "ac" : 3,
            "missile": 3,
            "init" : 2
        },
        "wis" : {
            "magic" : 3
        },
        "con" : {
            "hp" : 3
        },
        "cha" : {
            "npcRe" : 2,
            "maxRe" : 7,
            "reLoyal" : 10
        },
        "primeReq" : {
            "xpMod" : 0.1
        }
    }

};






function getRandom(num){
    return Math.floor(Math.random() * num + 1);
}

function questionBox(question){
    document.getElementById('questionBox').classList.remove('hidden');
    document.getElementById('questionMessage').innerHTML = question;
}

function getProfession(){
    aswText.value = "";
    fetch("profs.txt")
    .then(data => data.text())
    .then(y => {
        let newArr = y.split("\r");
        let temp = []
        for(let i = 0; i < newArr.length; i++){
            newArr[i] = newArr[i].replace("\n","")
            temp = newArr[i].split(",");
            profs["profession"][temp[0]] = {"tool" : temp[1], "item" : temp[2]}
        }
        let keys = Object.keys(profs["profession"]);
        let newProf = getRandom(keys.length); 
        profBox.value = keys[newProf];
        aswText.value = aswText.value + "\n" + profs["profession"][keys[newProf]]["tool"]
        aswText.value = aswText.value + "\n" + profs["profession"][keys[newProf]]["item"]

    }); 
    
    
}

function rollStats(){
    let abilities = [];
    let dice = [];
    for(let i=0; i < 6; i++){
        for(let n=0; n < 3; n++){
            dice.push(getRandom(6));
        }
        abilities.push(dice.reduce((a, b) => a + b, 0));
        dice = [];
        
    }
    strBox.value = abilities[0];
    intBox.value = abilities[1];
    wisBox.value = abilities[2];
    dexBox.value = abilities[3];
    conBox.value = abilities[4];
    chaBox.value = abilities[5];
    if(abilities.reduce((a,b) => a + b, 0) <= statMin){
        statsAgain =  confirm("Your stats look low.  Do you want to roll them again?");
        if(statsAgain){
            rollStats();
            return
        }
        statsAgain = false;
    }
    rollStatsBtn.disabled = true;

    console.log(abilities + ":" + abilities.reduce((a,b) => a + b, 0));
    

    updateForm();
}

function updateForm(){
    hitDie = hdSelect.value;
    level = levelBox.value;

    let totHP = [];
    
    for(let d = 0; d < level; d++){
        totHP.push(getRandom(hitDie));
        console.log(totHP)
    }

    let newHP = totHP.reduce((a, b) => a + b, 0);
    console.log(newHP)
    rolledHPBox.value = newHP;
    totHP = [];
    
    //make sure number of stat is a number and in the range of 3-18
    if(strBox.value > 2 && strBox.value < 19){
        //handling bonuses granted by str
        meleeBox.value = abilData[strBox.value].str.melee;
        odBox.value = abilData[strBox.value].str.od;
        //handling bonuses granted by wis
        pcBonusS.value = abilData[wisBox.value].wis.magic;
        //handling bonuses granted by dex
        missileBox.value = abilData[dexBox.value].dex.missile;
        acBonus.value = abilData[dexBox.value].dex.ac;
        initBox.value = abilData[dexBox.value].dex.init;
        unBox.value = 10 + abilData[dexBox.value].dex.ac;
        //handling bonuses granted by con
        hpBonus.value = abilData[conBox.value].con.hp;
        rolledHP = parseInt(rolledHPBox.value);
        level = parseInt(levelBox.value);
        bonusHP = parseInt(hpBonus.value);
        bonusHP = bonusHP * level;
        console.log(bonusHP)
        addedHP = rolledHP + bonusHP;
        if(addedHP < 1){
            alert("Adjusting hit points to 1.  Character cannot have less than 1 hit point.");
            addedHP = 1;
        }
        maxHpBox.value = addedHP;

        //handling bonuses granted by cha
        console.log(abilData[chaBox.value].cha.npcRe)
        initMod.value = abilData[chaBox.value].cha.npcRe;
    }else{
        alert("Stats are between 3 and 18")
    }
    
    
    

}


//updateForm();

bdDom.addEventListener("change",updateForm); //updates the form
reLdBtn.addEventListener('click', () => location.reload());  //reloads the page
rollStatsBtn.addEventListener('click', rollStats)
getProfBtn.addEventListener('click', getProfession);