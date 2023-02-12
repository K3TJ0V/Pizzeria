import '../scss/order.scss';

const names = ["hawaii", "vege", "meat", "highlander", "immortale", "beer"];

const inputs = [];

const labels = []


for (let i = 0; i < names.length; i++) {
    inputs[i] = document.querySelector('#'+names[i]);
    
}

for (let i = 0; i < names.length; i++) {
    labels[i] = document.querySelector('.'+ names[i]);
    
}
console.log(inputs);

for (let i = 0; i < names.length; i++) {
    inputs[i].addEventListener('click',()=>{
        labels[i].classList.toggle('checked')
    })
}