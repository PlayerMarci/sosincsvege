const theEnd = new Date(2025, 6 - 1, 13, 0, 0, 0);
const vege_test = new Date(2024, 10 - 1, 21);

const ancestor = document.getElementById("currentDate");


function CurrentDate(){
    let currentDate = new Date();
    let datetime = `${currentDate.getUTCFullYear()}-${currentDate.getUTCMonth() + 1}-${currentDate.getDate()} ${currentDate.getUTCHours() + 2}:${currentDate.getUTCMinutes()}:${currentDate.getUTCSeconds()}`;
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
    
    /*
    let timeToTheEnd = Math.abs(theEnd - currentDate);

    console.log(timeToTheEnd);

    let backtodate;
    backtodate.setTime(timeToTheEnd);

    console.log(backtodate);
*/

    DomElementCreate(datetime);
    setTimeout(DomElementRemove, 1000, datetime);
    if (`${currentDate}` == `${vege_test}`){
        //console.log("YAY");
    }
}

function DomElementCreate(datetime){
    let h2 = document.createElement("h2");
    h2.innerText = datetime;
    h2.id = datetime;
    ancestor.appendChild(h2);
}

function DomElementRemove(datetime){
    document.getElementById(datetime).remove();
}


setInterval(CurrentDate, 1000);

//CurrentDate();

