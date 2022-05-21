// let query = window.matchMedia('(max-width: 700px)');

// function qfunc(x) {

//     if (x.matches) {
//         const container = document.querySelector('.container');
//         const itext = document.querySelector('.itext');
//         const image2 = document.querySelector('.image2');

//         container.insertBefore(itext, image2)
//     } else {
//         const container = document.querySelector('.container');
//         const itext = document.querySelector('.itext');
//         const image2 = document.querySelector('.image2');

//         container.insertBefore(image2, itext)
//q     }
// }
// qfunc(query)

// query.addListener(qfunc)

const navbar = document.querySelector('ul');
const toggle = document.querySelector('.toggle');
const arrow = document.querySelector('.square');

toggle.addEventListener('click', (e) => {
    console.log(navbar.style.maxHeight)
    if (navbar.style.maxHeight == '270px') {
        arrow.style.borderWidth = '0px';
        navbar.style.maxHeight = '0px';
        // console.log('hello')

        // navbar.style.transition = 'all 3s';

    } else {
        arrow.style.borderWidth = '50px';
        navbar.style.maxHeight = '270px';
        navbar.style.display = 'block'
        arrow.style.display = 'block'
            // navbar.style.transition = 'all 3s';
    }
})
console.log(navbar.style)