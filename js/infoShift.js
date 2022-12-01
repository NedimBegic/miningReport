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

// render output on page refresh
if(localStorage.getItem('danStorage')){
    danIzlaz.textContent = `DAN: ${localStorage.getItem('danStorage').toUpperCase()}`;
    smjenaIzlaz.textContent = `SMJENA: ${localStorage.getItem('smjenaStorage').toUpperCase()}`;
}
// render output variables on click
dodajSmjenu.addEventListener('click', () => {
    let danUlaz = document.getElementById('danUlaz').value;
    let smjenaUlaz = document.getElementById('smjenaUlaz').value;
    localStorage.setItem('danStorage', danUlaz);
    localStorage.setItem('smjenaStorage', smjenaUlaz)

    // make output info
    danIzlaz.textContent = `DAN: ${localStorage.getItem('danStorage').toUpperCase()}`;
    smjenaIzlaz.textContent = `SMJENA: ${localStorage.getItem('smjenaStorage').toUpperCase()}`;

})