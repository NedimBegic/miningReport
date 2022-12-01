// button
let dodajNapomenu = document.getElementById('dodajNapomenu');
// article for listing
let listaNapomena = document.querySelector('.listaNapomena');
// array for notes in memory
let napomenaArr = JSON.parse(localStorage.getItem('napomenaArr')) || [];
// listing all notes
for(let i = 0;i<napomenaArr.length;i++) {
    listaNapomena.innerHTML += `
    <li class="note">${napomenaArr[i]}</li>

    `
}

dodajNapomenu.addEventListener('click', () => {
    let napomena = document.getElementById('napomena').value;
    napomenaArr.push(napomena);
    // putting notes in memory
    localStorage.setItem('napomenaArr', JSON.stringify(napomenaArr));
    listaNapomena.innerHTML += `
        <li class="note">${napomenaArr[napomenaArr.length-1]}</li>
    `
    document.getElementById('napomena').value = "";

})