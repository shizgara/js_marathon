// Exercise #1

const firstRow = prompt("Enter first sentences");
firstRow = firstRow.toLowerCase;
const secondRow = prompt("Enter second sentences");
secondRow = firstRow.toLowerCase;
const findLetter = prompt("Enter letter which need count");

function getRow(firstRow, secondRow) {

let firstRowCounter = 0;
let secondRowCounter = 0;
let equal = "they are equal";

for(let i=0;i<firstRow.length; i++){
    if(firstRow.charAt(i) == findLetter){
firstRowCounter++;
    }else {
        console.log("not ok");
    }
}
console.log("firstRowCounter===>>>",firstRowCounter);

for(let i=0;i<secondRow.length; i++){
    if(secondRow.charAt(i) == findLetter){
        secondRowCounter++;
    }else {
        console.log("not ok");
    }
}
console.log("secondRowCounter===>>>",secondRowCounter);

if(firstRowCounter > secondRowCounter){
return firstRow;
}else if(firstRowCounter < secondRowCounter){
    return secondRow
}else{
    return equal;
}
}

console.log(getRow(firstRow, secondRow)); 


// Exercise#2


let number = prompt("Enter your phone number");

function formattedPhone(phone) {

if(phone.charAt(0) == "+"){
let result = "";

for(let i=0; i<phone.length; i++){
    console.log("Під номером =>" + i + "  В строці в нас стоїть символ =>" + phone.charAt(i));
    if(i == 1){
        result+= phone.charAt(i) + " " + "(";
    }else if(i == 4){
        result+= phone.charAt(i) + ")" + " ";
    }else if(i == 7){
        result+= phone.charAt(i) + "-";
    }
    else if(i == 9){
        result+= phone.charAt(i) + "-";
    }else{
        result+= phone.charAt(i);
    }

    }
console.log(result);
}

else if(phone.length == 11){
    let result = "";

    for(let i=0; i<phone.length; i++){
        console.log("Під номером =>" + i + "  В строці в нас стоїть символ =>" + phone.charAt(i));
        if(i == 0){
            result+= "+7";
        }else if(i == 1){
            result+= " " + "(" + phone.charAt(i);
        }else if(i == 3){
            result+= phone.charAt(i) + ")" + " ";
        }
        else if(i == 6){
            result+= phone.charAt(i) + "-";
        }
        else if(i == 8){
            result+= phone.charAt(i) + "-";
        }else{
            result+= phone.charAt(i);
        }
    
        }
    console.log(result);  
}

else if(phone.length == 10){
    let result = "";

    for(let i=0; i<phone.length; i++){
        console.log("Під номером =>" + i + "  В строці в нас стоїть символ =>" + phone.charAt(i));
        if(i == 0){
            result+= "+7 (" + phone.charAt(i);
        }else if(i == 2){
            result+= phone.charAt(i) + ")" + " ";
        }
        else if(i == 5){
            result+= phone.charAt(i) + "-";
        }
        else if(i == 7){
            result+= phone.charAt(i) + "-";
        }else{
            result+= phone.charAt(i);
        }
    
        }
    console.log(result);  
}
else{
    alert("Wrong number")
}
}

formattedPhone(number); 
