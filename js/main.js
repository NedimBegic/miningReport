// buttons
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

// render tables from localStorage 
let table1 = document.getElementById('table1');
let table2 = document.getElementById('table2');

// the arrays that holds data from localStorage
let arrTable = JSON.parse(localStorage.getItem('tableArr')) || [];
let arrTable2 = JSON.parse(localStorage.getItem('tableArr2')) || [];
// rendering tables on refresh
for(let i = 0; i<arrTable.length;i++) {
        table1.innerHTML += `
        <tr>
        <td class="timeIn">
        <div class="twoInputs">
        <input class="noBorder" type="time" value=${arrTable[i].time1}>-
        <input class="noBorder" type="time" value=${arrTable[i].time2}>
        </div>
        </td>
        <td class="textIn" contenteditable="true">${arrTable[i].opis1}</td>
        <td class="numberIn" contenteditable="true">${arrTable[i].kol1}</td>
    </tr>
        `
}


for(let i = 0;i<arrTable2.length;i++) {
    table2.innerHTML += `
    <tr>
    <td class="timeIn">
    <div class="twoInputs">
    <input class="noBorder" type="time" value=${arrTable2[i].time1}>-
    <input class="noBorder" type="time" value=${arrTable2[i].time2}>
    </div>
    </td>
    <td class="textIn" contenteditable="true">${arrTable2[i].opis1}</td>
    <td class="numberIn" contenteditable="true">${arrTable2[i].kol1}</td>
</tr>
    `
}
// array for data on first table
let tableArr = arrTable;
// add evenet to button1
button1.addEventListener('click', () => {
    // info for table 1 
    let opis1 = document.getElementById('opis1').value;
    let time1 = document.getElementById('time1').value;
    let time2 = document.getElementById('time2').value
    let kol1 = document.getElementById('kol1').value;
    tableArr.push({opis1, time1, time2, kol1});
    // puting it in localStorage
    localStorage.setItem('tableArr', JSON.stringify(tableArr));
   
    table1.innerHTML += `
    <tr>
    <td class="timeIn">
    <div class="twoInputs">
    <input class="noBorder" type="time" value=${arrTable[arrTable.length-1].time1}>-
    <input class="noBorder" type="time" value=${arrTable[arrTable.length-1].time2}>
    </div>
    </td>
    <td class="textIn" contenteditable="true">${arrTable[arrTable.length-1].opis1}</td>
    <td class="numberIn" contenteditable="true">${arrTable[arrTable.length-1].kol1}</td>
</tr>
    `
    // clear after submit
    document.getElementById('opis1').value = '';
    document.getElementById('time1').value = '';
    document.getElementById('time2').value = '';
    document.getElementById('kol1').value = '';
    
})
// array for daty on secont table
let tableArr2 = arrTable2;
// add event for button2
button2.addEventListener('click', () => {
     // info for table 2
     let opis1 = document.getElementById('opis1').value;
     let time1 = document.getElementById('time1').value;
     let time2 = document.getElementById('time2').value
     let kol1 = document.getElementById('kol1').value;
     tableArr2.push({opis1, time1, time2, kol1});
     localStorage.setItem('tableArr2', JSON.stringify(tableArr2));

     table2.innerHTML += `
    <tr>
    <td class="timeIn">
    <div class="twoInputs">
    <input class="noBorder" type="time" value=${arrTable2[arrTable2.length-1].time1}>-
    <input class="noBorder" type="time" value=${arrTable2[arrTable2.length-1].time2}>
    </div>
    </td>
    <td class="textIn" contenteditable="true">${arrTable2[arrTable2.length-1].opis1}</td>
    <td class="numberIn" contenteditable="true">${arrTable2[arrTable2.length-1].kol1}</td>
</tr>
    `
    // clear after submit
    document.getElementById('opis1').value = '';
    document.getElementById('time1').value = '';
    document.getElementById('time2').value = '';
    document.getElementById('kol1').value = '';
})


/* -----------------------------Add image section-----------*/

// unos slike i teksta
let image = document.getElementById('image');
let urlOfImage = '';

let buttonImage = document.getElementById('addImage');

image.addEventListener('change', (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.addEventListener('load', () => {
        urlOfImage = reader.result;
    });
    reader.readAsDataURL(file)
});

buttonImage.addEventListener('click', () => {
    let noteImage = document.getElementById('noteImage').value;
    // create element and render it
    let img1 = document.createElement('img');
    img1.classList.add('images');
    img1.src = urlOfImage;
    let note = document.createElement('p');
    note.classList.add('note');
    note.textContent = "*" + noteImage;
    // call list article and render children
    let listaSlika = document.querySelector('.listaSlika');
    listaSlika.appendChild(img1);
    listaSlika.appendChild(note);

    document.getElementById('noteImage').value = "";
})
 

// clear localStorage
document.getElementById('clear').addEventListener('click', () => {
    localStorage.clear();
})

// hide info divs befor printing
document.getElementById('noDisplay').addEventListener('click', () => {
    document.querySelector('.info').classList.add('hidden');
    document.getElementById('buttonDiv').classList.add('hidden');
    document.getElementById('clear').classList.add('hidden');
    document.getElementById('noDisplay').classList.add('hidden');

})