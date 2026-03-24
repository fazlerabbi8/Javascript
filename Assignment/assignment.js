function calculateTax(income, expenses) {
  if (0 <= income && 0 <= expenses && income >= expenses) {
    let tex = (income - expenses) * 0.2;
    return tex;
  }
}




function sendNotification(email) {
    const parts = email.split("@");

    const userName = parts[0];
    const domain = parts[1];

    let message = userName + " " + "sent you an email from" + " " + domain;
    return message;

}



function checkDigitsInName(name) {
    if(typeof name !== "string"){
       return "Invalid Input";
    }

    for(let ch of name){
        if(ch >= '0' && ch <= '9'){
            return true;
        }
    }
    return false;
}




function calculateFinalScore(obj) {
  if(typeof obj !== "object"){
    return "Invalid Input"
  }

  let score1 = obj.testScore;
  let score2 = obj.schoolGrade;

  if((score1 + score2) >= 80 && obj.isFFamily){
    return true;
  }else{
    return false;
  }
}




// function waitingTime(waitingTimes, serialNumber) {
//   if (!Array.isArray(waitingTimes)) {
//     return "Invalid Input";
//   }

//   if (typeof serialNumber !== "number") {
//     return "Invalid Input";
//   }

//   let len = waitingTimes.length;
//   let sum = 0;
//   for (let i of waitingTimes) {
//     sum += i;
//   }
//   let average = Math.floor(sum / len);

//   let remainPeople = serialNumber - 1 - len;
//   let timeNeed = remainPeople * average;
//   return timeNeed;
// }
