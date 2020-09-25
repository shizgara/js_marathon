// Exercise #1


// let firstRow = prompt("Enter first sentences");
// firstRow = firstRow.toLowerCase();
// let secondRow = prompt("Enter second sentences");
// secondRow = secondRow.toLowerCase();
// let findLetter = prompt("Enter letter which need count");

// function getRow(firstRow, secondRow) {

// let firstRowCounter = countedChar(firstRow,findLetter);
// let secondRowCounter = countedChar(secondRow,findLetter);

// if(firstRowCounter == secondRowCounter){
//     return "they are equal";
// }

// return firstRowCounter > secondRowCounter ? firstRow : secondRow; //Порівняння рядків де більше шуканих букв за допомогою тернанрного оператора
// }

// function countedChar(row, char){
//         let counted = 0;
    
//         for(let i=0; i<row.length; i++){
//             if (row.charAt(i) == char){
//                 counted++;
//             }else {
//                 console.log("not ok");
//             }
//         }
//         console.log("counted====>>>>",counted)
//        return counted;
//     }

// console.log(getRow(firstRow, secondRow)); 


// Exercise#2


// let number = prompt("Enter your phone number");

// function formattedPhone(phone) {

// if(phone.charAt(0) == "+"){
// let result = "";

// for(let i=0; i<phone.length; i++){
//     console.log("Під номером =>" + i + "  В строці в нас стоїть символ =>" + phone.charAt(i));
//     if(i == 1){
//         result+= phone.charAt(i) + " " + "(";
//     }else if(i == 4){
//         result+= phone.charAt(i) + ")" + " ";
//     }else if(i == 7){
//         result+= phone.charAt(i) + "-";
//     }
//     else if(i == 9){
//         result+= phone.charAt(i) + "-";
//     }else{
//         result+= phone.charAt(i);
//     }

//     }
// console.log(result);
// }

// else if(phone.length == 11){
//     let result = "";

//     for(let i=0; i<phone.length; i++){
//         console.log("Під номером =>" + i + "  В строці в нас стоїть символ =>" + phone.charAt(i));
//         if(i == 0){
//             result+= "+7";
//         }else if(i == 1){
//             result+= " " + "(" + phone.charAt(i);
//         }else if(i == 3){
//             result+= phone.charAt(i) + ")" + " ";
//         }
//         else if(i == 6){
//             result+= phone.charAt(i) + "-";
//         }
//         else if(i == 8){
//             result+= phone.charAt(i) + "-";
//         }else{
//             result+= phone.charAt(i);
//         }
    
//         }
//     console.log(result);  
// }

// else if(phone.length == 10){
//     let result = "";

//     for(let i=0; i<phone.length; i++){
//         console.log("Під номером =>" + i + "  В строці в нас стоїть символ =>" + phone.charAt(i));
//         if(i == 0){
//             result+= "+7 (" + phone.charAt(i);
//         }else if(i == 2){
//             result+= phone.charAt(i) + ")" + " ";
//         }
//         else if(i == 5){
//             result+= phone.charAt(i) + "-";
//         }
//         else if(i == 7){
//             result+= phone.charAt(i) + "-";
//         }else{
//             result+= phone.charAt(i);
//         }
    
//         }
//     console.log(result);  
// }
// else{
//     alert("Wrong number")
// }
// }

// formattedPhone(number); 
