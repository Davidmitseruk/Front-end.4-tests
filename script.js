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

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const des = document.querySelector('#des');

// parent.addEventListener('click', () => {
//     alert('Parent clicked!');
// })

// child.addEventListener('click', () => {
//     alert('Child clicked!');
// })

// des.addEventListener('click', (event) => {
//     event.stopPropagation();
//     alert('Des clicked!')
// })

// const box = document.querySelector('div.box')
// box.addEventListener('click', function(event){
 //    console.log(event.target);
// })

//const input = document.querySelector('#input')
//input.addEventListener('text',_-throttle(() =))

//function candleinput(){
//   const text = event.target.value;
 //   console.log('Send to Server:', text)
 //   
//};
//const throttleInput = _.throttle(candleinput, 500);
//const input = document.querySelector('#input');
//input.addEventListener('input', throttleInput)

//function updateCoordinats (event){
 //   const graph = document.getElementById('graph');
 //   const point = document.getElementById('point');
 //   const coord = document.getElementById('coord');

 //   const rect = graph.getBoundingClientRect();
 //   const x = event.clientX - rect.left;
 //   const y = event.clientY - rect.top;

  // point.setAttribute('cx', x)
  //  point.setAttribute('cy', y)

  //  coord.textContent = `X: ${x.toFixed(0)}, Y: ${y.toFixed(0)}`;
//};

//const throttleUpdate = _.throttle(updateCoordinats, 50);
//const graphElement = document.getElementById('graph');
//graphElement.addEventListener('mousemove', throttleUpdate)

//const options = {
//  root: null,
//  rootMargin: '0px',
 // thresHold: 0.1,

//}
//const observer = new IntersectionObserver((entries, observer)=> {
//   entries.forEach(entry => {
//    if (entry.isIntersecting){
//      const img = entry.target;
      img.src = img.dataset.src;
//      observer.unobserve();
//    }
//   })
//}, options);

//document.querySelectorAll('.lazy-image').forEach(img => {
//  observer.observe(img)}
//  ,
//)