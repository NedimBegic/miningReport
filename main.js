
// buttons
let button1 = document.getElementById('button1');

// add tables
let table1 = document.getElementById('table1');
let arrTable = JSON.parse(localStorage.getItem('tableArr')) || [];
if(arrTable !== null) {
    for(let i = 0; i<arrTable.length;i++) {
        table1.innerHTML += `
        <tr>
        <td class="timeIn"><input class="noBorder" type="time" value=${arrTable[i].time1}></td>
        <td class="textIn" contenteditable="true">${arrTable[i].opis1}</td>
        <td class="numberIn" contenteditable="true">${arrTable[i].kol1}</td>
    </tr>
        `
    }
}

let tableArr = arrTable;
console.log(tableArr)
// add evenet to button 
button1.addEventListener('click', () => {
    // info for table 1 
    let opis1 = document.getElementById('opis1').value;
    let time1 = document.getElementById('time1').value;
    let kol1 = document.getElementById('kol1').value;
    tableArr.push({opis1, time1, kol1});
    localStorage.setItem('tableArr', JSON.stringify(tableArr));
    // putting in localStorage
   
    console.log(JSON.parse(localStorage.getItem('tableArr')))
    console.log(arrTable)
    table1.innerHTML += `
    <tr>
    <td class="timeIn"><input class="noBorder" type="time" value=${arrTable[arrTable.length-1].time1}></td>
    <td class="textIn" contenteditable="true">${arrTable[arrTable.length-1].opis1}</td>
    <td class="numberIn" contenteditable="true">${arrTable[arrTable.length-1].kol1}</td>
</tr>
    `
    // clear after submit
    document.getElementById('opis1').value = '';
    document.getElementById('time1').value = '';
    document.getElementById('kol1').value = '';
    
})


/* -----------Add image section-----------*/

// unos slike i teksta
let image = document.getElementById('dodajSliku');
let urlOfImage = '';

let buttonImage = document.getElementById('buttonImage');

image.addEventListener('change', (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.addEventListener('load', () => {
        urlOfImage = reader.result;
    });
    reader.readAsDataURL(file)
})

// broj priloga
let broj = 1    ;
buttonImage.addEventListener('click', () => {
    let text = document.getElementById('dodajTekst').value;

    // crate div prilog
    let prilog = document.createElement('div');
    prilog.setAttribute('id', 'prilog');
    // create h2
    let naslov = document.createElement('h2');
    naslov.setAttribute('class', 'prilogNaslov');
    naslov.textContent = `Prilog ${broj++}`
    // create image
    let picture = document.createElement('img');
    picture.setAttribute('id', 'ovde')
    picture.src = `${urlOfImage}`;
    // create paragraph
    let parag = document.createElement('p');
    parag.setAttribute('id', 'ovdeText');
    parag.textContent = text;
    
    // put everything inside the div and then render the div in article
    prilog.appendChild(naslov);
    prilog.appendChild(picture);
    prilog.appendChild(parag);
    document.querySelector('.lista').appendChild(prilog)
    
    // delete content from text 
    document.getElementById('dodajTekst').value = ''
})



