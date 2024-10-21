const theEnd = new Date(2025, 6 - 1, 13, 0, 0, 0);
const vege_test = new Date(2024, 10 - 1, 21);

const ancestor = document.getElementById("currentDate");


function CurrentDate(){
    let currentDate = new Date();
    let datetime = `${currentDate.getUTCFullYear()}-${currentDate.getUTCMonth() + 1}-${currentDate.getDate()} ${currentDate.getUTCHours() + 2}:${currentDate.getUTCMinutes()}:${currentDate.getUTCSeconds()}`;
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
    let timeToTheEnd = Math.abs(theEnd.getTime() - currentDate.getTime());
    let backtodate = new Date();
    backtodate.setTime(timeToTheEnd);
    let text = `${1970 - backtodate.getFullYear()}-${backtodate.getUTCMonth() + 1}-${backtodate.getDate()} ${backtodate.getUTCHours()}:${backtodate.getUTCMinutes()}:${backtodate.getUTCSeconds()}`;


    DomElementCreate(datetime, text);
    setTimeout(DomElementRemove, 1000, datetime);
    if (`${currentDate}` == `${vege_test}`){
        //console.log("YAY");
    }
}

function DomElementCreate(datetime, text){
    let h2 = document.createElement("h2");
    h2.innerText = `Jelenlegi idő: ${datetime}`;
    h2.id = datetime;

    let div = document.createElement("div");
    div.innerText = `Hátralévő idő: ${text}`;

    h2.appendChild(div);
    ancestor.appendChild(h2);
}

function DomElementRemove(datetime){
    document.getElementById(datetime).remove();
}


setInterval(CurrentDate, 1000);

//CurrentDate();

