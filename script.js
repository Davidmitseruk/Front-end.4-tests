// const parent = document.querySelector('#parent');
//const child = document.querySelector('#child');
//const des = document.querySelector('#des');

//parent.addEventListener('click', () => {
//    console.log('Parent click');
//})
//child.addEventListener('click', () => {
//    console.log('Child click');
//})
//des.addEventListener('click', () => {
//    console.log('Des Cliked')
//})

//const parent = document.querySelector('#parent');

//parent.addEventListener('click', (event) => {
//  console.log('event.target: ',event.target);
//  console.log('event.currentTarget: ', event.currentTarget);
//})

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const des = document.querySelector('#des');

parent.addEventListener('click', () => {
    alert('Parent clicked!');
})

child.addEventListener('click', () => {
    alert('Child clicked!');
})

des.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Des clicked!')
})

const box = document.querySelector('div.box')
box.addEventListener('click', function(event){
    console.log(event.target);
})