const inputNameEl = document.querySelector('.nameinput');
const inputNumberEl = document.querySelector('.numberinput');

const btnAddEl = document.querySelector('.btnconntact');
const addConntact = document.querySelector('#addconntact')
let count = 0;


btnAddEl.addEventListener('click', addConntacts);

function addConntacts(){
    const inputvalue1 = inputNameEl.value;
    const inputvalue2 = inputNumberEl.value;
   
   
const adderconntact = document.createElement('div')
adderconntact.innerHTML = `<div  class="conntact__add">
<h1 class="name"><i class="fas fa-address-book"></i>${inputvalue1}</h1>
<h3 class="phone"><i class="fas fa-phone">${inputvalue2}</i></h3>
<button id="${count}" class="btn delete"><i class="fas fa-trash-alt"></i> Delete</button>
</div>`
 

addConntact.appendChild(adderconntact);


const deleteConntact = document.getElementById(`${count}`);

count++


deleteConntact.addEventListener('click', ()=>{
 
    addConntact.removeChild(adderconntact)
   
})
}





