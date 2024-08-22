
function FuncGraph() {
    //base stats
    const baseHP = 97;
    const baseAtk = 35;
    const baseDef = 55;
    const baseSpAtk = 155;
    const baseSpDef = 105;
    const baseSpeed = 110;
    //total
    const total = baseHP + baseAtk + baseDef + baseSpAtk + baseSpDef + baseSpeed;

    //Types
    let Type1 = "Ghost";
    let Type2 = "Ghost";
    //["Normal", "Fire", "Fighting", "Water", "Flying", "Grass", "Poison", "Electric", "Ground", "Psychic", "Rock", "Ice", "Bug", "Dragon", "Ghost", "Dark", "Steel", "Fairy"]


    console.log(Type1);
    console.log(Type2);

    //place number
    document.getElementById("HpNum").innerHTML = baseHP;
    document.getElementById("AtkNum").innerHTML = baseAtk;
    document.getElementById("DefNum").innerHTML = baseDef;
    document.getElementById("SpAtkNum").innerHTML = baseSpAtk;
    document.getElementById("SpDefNum").innerHTML = baseSpDef;
    document.getElementById("SpeedNum").innerHTML = baseSpeed;
    document.getElementById("valuetotal").innerHTML = total;

    //graph size
    const graphHp = baseHP / 255;
    const graphAtk = baseAtk / 255;
    const graphDef = baseDef / 255;
    const graphSpAtk = baseSpAtk / 255;
    const graphSpDef = baseSpDef / 255;
    const graphSpeed = baseSpeed / 255;

    document.getElementById("stathp").innerHTML = ' <div id="barraHP" style="width: calc(100% * ' + graphHp + ' ")></div>'
    document.getElementById("statatk").innerHTML = ' <div id="barraAtk" style="width: calc(100% * ' + graphAtk + ' ")></div>'
    document.getElementById("statdef").innerHTML = ' <div id="barraDef" style="width: calc(100% * ' + graphDef + ' ")></div>'
    document.getElementById("statspatk").innerHTML = ' <div id="barraSpAtk" style="width: calc(100% * ' + graphSpAtk + ' ")></div>'
    document.getElementById("statspdef").innerHTML = ' <div id="barraSpDef" style="width: calc(100% * ' + graphSpDef + ' ")></div>'
    document.getElementById("statspeed").innerHTML = ' <div id="barraSpeed" style="width: calc(100% * ' + graphSpeed + ' ")></div>'

    //hp
    const rangeHP50min = ( (2 * baseHP * 50) / 100 ) + 60;
    const rangeHP50max = ( ( ( (2 * baseHP) + 94 ) * 50) / 100 ) + 60;
    const rangeHP100min = ( 2 * baseHP ) + 110;
    const rangeHP100max = ( ( ( (2 * baseHP) + 94 ) ) ) + 110;

    const NatureUp = (110 / 100);
    const NatureDown = (90 / 100);
    const IV = 31;
    const EV = (252 / 4);

    //atk
    const rangeAtk50min = ( ( (2 * baseAtk * 50) / 100) + 5) * NatureDown;
    const rangeAtk50max = ( ( (2 * baseAtk + IV + EV) * (50 /100) ) + 5) * NatureUp;
    const rangeAtk100min = ( ( (2 * baseAtk)) + 5) * NatureDown;
    const rangeAtk100max = ( ( (2 * baseAtk + IV + EV) ) + 5) * NatureUp;

    //def
    const rangeDef50min = ( ( (2 * baseDef * 50) / 100) + 5) * NatureDown;
    const rangeDef50max = ( ( (2 * baseDef + IV + EV) * (50 /100) ) + 5) * NatureUp;
    const rangeDef100min = ( ( (2 * baseDef)) + 5) * NatureDown;
    const rangeDef100max = ( ( (2 * baseDef + IV + EV) ) + 5) * NatureUp;

    //spatk
    const rangeSpAtk50min = ( ( (2 * baseSpAtk * 50) / 100) + 5) * NatureDown;
    const rangeSpAtk50max = ( ( (2 * baseSpAtk + IV + EV) * (50 /100) ) + 5) * NatureUp;
    const rangeSpAtk100min = ( ( (2 * baseSpAtk)) + 5) * NatureDown;
    const rangeSpAtk100max = ( ( (2 * baseSpAtk + IV + EV) ) + 5) * NatureUp;

    //spdef
    const rangeSpDef50min = ( ( (2 * baseSpDef * 50) / 100) + 5) * NatureDown;
    const rangeSpDef50max = ( ( (2 * baseSpDef + IV + EV) * (50 /100) ) + 5) * NatureUp;
    const rangeSpDef100min = ( ( (2 * baseSpDef)) + 5) * NatureDown;
    const rangeSpDef100max = ( ( (2 * baseSpDef + IV + EV) ) + 5) * NatureUp;

    //speed
    const rangeSpeed50min = ( ( (2 * baseSpeed * 50) / 100) + 5) * NatureDown;
    const rangeSpeed50max = ( ( (2 * baseSpeed + IV + EV) * (50 /100) ) + 5) * NatureUp;
    const rangeSpeed100min = ( ( (2 * baseSpeed)) + 5) * NatureDown;
    const rangeSpeed100max = ( ( (2 * baseSpeed + IV + EV) ) + 5) * NatureUp;

    //colocar Ranges na tabela
    document.getElementById("hplvl50").innerHTML = rangeHP50min + " - " + rangeHP50max;
    document.getElementById("hplvl100").innerHTML = rangeHP100min + " - " + rangeHP100max;

    document.getElementById("atklvl50").innerHTML = Math.floor(rangeAtk50min) + " - " + Math.floor(rangeAtk50max);
    document.getElementById("atklvl100").innerHTML = Math.floor(rangeAtk100min) + " - " + Math.floor(rangeAtk100max);

    document.getElementById("deflvl50").innerHTML = Math.floor(rangeDef50min) + " - " + Math.floor(rangeDef50max);
    document.getElementById("deflvl100").innerHTML = Math.floor(rangeDef100min) + " - " + Math.floor(rangeDef100max);

    document.getElementById("spatklvl50").innerHTML = Math.floor(rangeSpAtk50min) + " - " + Math.floor(rangeSpAtk50max);
    document.getElementById("spatklvl100").innerHTML = Math.floor(rangeSpAtk100min) + " - " + Math.floor(rangeSpAtk100max);

    document.getElementById("spdeflvl50").innerHTML = Math.floor(rangeSpDef50min) + " - " + Math.floor(rangeSpDef50max);
    document.getElementById("spdeflvl100").innerHTML = Math.floor(rangeSpDef100min) + " - " + Math.floor(rangeSpDef100max);

    document.getElementById("speedlvl50").innerHTML = Math.floor(rangeSpeed50min) + " - " + Math.floor(rangeSpeed50max);
    document.getElementById("speedlvl100").innerHTML = Math.floor(rangeSpeed100min) + " - " + Math.floor(rangeSpeed100max);

    //background & Border
    switch(Type1){
        case "Normal":
            document.getElementById("type").style.background = "#9FA19F";
        break;
        case "Fire":
            document.getElementById("type").style.background = "#E62829";
        break;
        case "Fighting":
            document.getElementById("type").style.background = "#FF8000";
        break;
        case "Water":
            document.getElementById("type").style.background = "#2980EF";
        break;
        case "Flying":
            document.getElementById("type").style.background = "#81B9EF";
        break;
        case "Grass":
            document.getElementById("type").style.background = "#3FA129";
        break;
        case "Poison":
            document.getElementById("type").style.background = "#9141CB";
        break;
        case "Electric":
            document.getElementById("type").style.background = "#FAC000";
        break;
        case "Ground":
            document.getElementById("type").style.background = "#915121";
        break;
        case "Psychic":
            document.getElementById("type").style.background = "#EF4179";
        break;
        case "Rock":
            document.getElementById("type").style.background = "#AFA981";
        break;
        case "Ice":
            document.getElementById("type").style.background = "#3DCEF3";
        break;
        case "Bug":
            document.getElementById("type").style.background = "#91A119";
        break;
        case "Dragon":
            document.getElementById("type").style.background = "#5060E1";
        break;
        case "Ghost": 
            document.getElementById("type").style.background = "#704170";
        break
        case "Dark":
            document.getElementById("type").style.background = "#624D4E";
        break;
        case "Steel":
            document.getElementById("type").style.background = "#60A1B8";
        break
        case "Fairy":
            document.getElementById("type").style.background = "#EF70EF";
        break
    }

    switch(Type2){
        case "Normal":
            document.getElementById("type").style.border = "3px solid #676967";
        break;
        case "Fire":
            document.getElementById("type").style.border = "3px solid #961A1B";
        break;
        case "Fighting":
            document.getElementById("type").style.border = "3px solid #A65300";
        break;
        case "Water":
            document.getElementById("type").style.border = "3px solid #1B539B";
        break;
        case "Flying":
            document.getElementById("type").style.border = "3px solid #54789B";
        break;
        case "Grass":
            document.getElementById("type").style.border = "3px solid #29691B";
        break;
        case "Poison":
            document.getElementById("type").style.border = "3px solid #5E2A84";
        break;
        case "Electric":
            document.getElementById("type").style.border = "3px solid #A37D00";
        break;
        case "Ground":
            document.getElementById("type").style.border = "3px solid #5E3515";
        break;
        case "Psychic":
            document.getElementById("type").style.border = "3px solid #9B2A4F";
        break;
        case "Rock":
            document.getElementById("type").style.border = "3px solid #726E54";
        break;
        case "Ice":
            document.getElementById("type").style.border = "3px solid #28869E";
        break;
        case "Bug":
            document.getElementById("type").style.border = "3px solid #5E6910";
        break;
        case "Dragon":
            document.getElementById("type").style.border = "3px solid #343E92";
        break;
        case "Ghost": 
            document.getElementById("type").style.border = "3px solid #492A49";
        break
        case "Dark":
            document.getElementById("type").style.border = "3px solid #403233";
        break;
        case "Steel":
            document.getElementById("type").style.border = "3px solid #3E6978";
        break
        case "Fairy":
            document.getElementById("type").style.border = "3px solid #9B499B";
        break
    }



}


