function ageInDays() {

    const birthYear = prompt("What year were you born ....?");
    console.log(birthYear);
    var ageInDayss = (2022 - birthYear) * 365;
    console.log(ageInDayss);

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ageInDayss + "days")
    h1.appendChild(textAnswer);
    h1.setAttribute("id" , "reset");
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
    document.getElementById('reset').remove();
}

