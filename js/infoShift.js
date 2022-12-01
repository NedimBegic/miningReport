/* -------------putting the date in app */
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '.' + dd + '.' + yyyy;
// putting date and shift in table
document.getElementById('datum').textContent += today;

/* -----------putting the day in app */
let dodajSmjenu = document.getElementById('dodajSmjenu');

// output variables
let danIzlaz = document.getElementById('danIzlaz');
let smjenaIzlaz = document.getElementById('smjenaIzlaz');
let imeIzlaz = document.getElementById('imeIng');

// render output on page refresh
if(localStorage.getItem('danStorage')){
    danIzlaz.textContent = `DAN: ${localStorage.getItem('danStorage').toUpperCase()}`;
    smjenaIzlaz.textContent = `SMJENA: ${localStorage.getItem('smjenaStorage').toUpperCase()}`;
    imeIzlaz.textContent = localStorage.getItem('imeUlaz');

}
// render output variables on click
dodajSmjenu.addEventListener('click', () => {
    let danUlaz = document.getElementById('danUlaz').value;
    let smjenaUlaz = document.getElementById('smjenaUlaz').value;
    let imeUlaz = document.getElementById('imeUlaz').value;
    localStorage.setItem('danStorage', danUlaz);
    localStorage.setItem('smjenaStorage', smjenaUlaz);
    localStorage.setItem('imeUlaz', imeUlaz);

    // make output info
    danIzlaz.textContent = `DAN: ${localStorage.getItem('danStorage').toUpperCase()}`;
    smjenaIzlaz.textContent = `SMJENA: ${localStorage.getItem('smjenaStorage').toUpperCase()}`;
    imeIzlaz.textContent = localStorage.getItem('imeUlaz');

});