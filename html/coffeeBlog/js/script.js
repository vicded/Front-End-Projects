'use strict';

const info = {
    customerName: '',
    email:'',
    message:''
} 

const customerName = document.querySelector('#customerName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const formulary = document.querySelector('.formulary');

customerName.addEventListener('input',readText);
email.addEventListener('input',readText);
message.addEventListener('input',readText);


formulary.addEventListener('submit',function(e) {
    e.preventDefault();

    const {customerName,email,message} = info;

   // console.log(customerName,email,message);

    if(customerName === '' || email === '') {
        displayAlert('Please type in name and mail',true);
        return;
    }

    displayAlert('Sending form');
})

function readText(e){
    info[e.target.id] = e.target.value;
}


function displayAlert(label, error = null) {
    const alert = document.createElement('P');
    alert.textContent = label;

    if(error){
        alert.classList.add('error');   
    } else {
        alert.classList.add('success');
    }

    formulary.appendChild(alert);

    setTimeout(()=> {
        alert.remove();
    }, 2000);  
}





