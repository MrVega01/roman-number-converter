import getNames from "./listNames.js";

const app = document.querySelector('#app');
NamestoRomans(getNames());

function NamestoRomans(list){
    let newList = [];

    for(let name of list){
        if(name[name.length -2] !== " "){
            let number = name.substring(name.length - 2, name.length);
            newList.push(name.substring(0, name.length - 2) + transformNumbers(number));
        }
        else{
            let number = name.substring(name.length - 1, name.length);
            newList.push(name.substring(0, name.length - 1) + transformNumbers(number));
        }
    }
    writeList(newList);
}
function transformNumbers(number){
    if(number.length === 1){
        return singleNumber(number);
    }
    else{
        return doubleNumber(number);
    }
    // SINGLES NUMBERS
    function singleNumber(s){
        s = +s;
        if(s == 0){
           return ""; 
        }
        else if (s === 1){
            return "I";
        }
        else if (s === 2){
            return "II";
        }
        else if (s === 3){
            return "III";
        }
        else if (s === 4){
            return "IV";
        }
        else if (s === 5){
            return "V";
        }
        else if (s === 6){
            return "VI";
        }
        else if (s === 7){
            return "VII";
        }
        else if (s === 8){
            return "VIII";
        }
        else if (s === 9){
            return "IX";
        }
    }
    // DOUBLES NUMBERS
    function doubleNumber(number){
        let response = "";
        const firstNumber = +number[0];
        const romanSecondNumber = singleNumber(number[1]);

        if(firstNumber === 1){
            response = "X";
        }
        else if (firstNumber === 2){
            response = "XX";
        }
        else if (firstNumber === 3){
            response = "XXX";
        }
        else if (firstNumber === 4){
            response = "XL";
        }
        else if (firstNumber === 5){
            response = "L";
        }
        else if (firstNumber === 6){
            response = "LX";
        }
        else if (firstNumber === 7){
            response = "LXX";
        }
        else if (firstNumber === 8){
            response = "LXXX";
        }
        else if (firstNumber === 9){
            response = "XC";
        }
        return response + romanSecondNumber;
    }
}
function writeList(toInsert){
    let result = "";
    toInsert.map(e => result += `<li>${e}</li>`);
    app.innerHTML = `
    <h3>Names with numbers to names with roman numbers converter</h3>
    <p>Support numbers from 0 to 99, feel free to add names with number in the script.js</p>
    <ul>${result}</ul>`;
}