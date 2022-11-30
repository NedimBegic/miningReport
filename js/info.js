// todays date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '.' + dd + '.' + yyyy;
// putting date and shift in table
document.querySelector('.datum').textContent = today;
let smjena = document.getElementById('smjena').value;
let shift = "";
if(smjena == "prva"){
    shift = "I";
}else if (smjena == "druga"){
    shift = "II"
}
document.querySelector('.kojaSmjena').textContent += shift;
// the buttons for different info
let podaci = document.getElementById('podaci');
let tabele = document.getElementById('tabele');
let napomene = document.getElementById('napomene');
let slike = document.getElementById('slike');

let podaciDiv = document.querySelector('.podaciDiv');
let tabelaDiv = document.querySelector('.tabelaDiv');
let napomeneDiv = document.querySelector('.napomeneDiv');
let slikeDiv = document.querySelector('.slikeDiv');


// put every div in array to show one and hide others
let arrDiv = [podaciDiv, tabelaDiv, napomeneDiv, slikeDiv];

// functions that call on different button click
const showHide = (showDiv, arrDiv) => {
    let noShowDivArr = arrDiv.filter(e => e !== showDiv);
    // hide every div in arr 
    for (x of noShowDivArr) {
        x.classList.add("hidden");
    }
    showDiv.classList.toggle("hidden");
}
// events on button click
podaci.addEventListener('click', () => showHide(podaciDiv, arrDiv))
tabele.addEventListener('click', () => showHide(tabelaDiv, arrDiv))
napomene.addEventListener('click', () => showHide(napomeneDiv, arrDiv))
slike.addEventListener('click', () => showHide(slikeDiv, arrDiv))


