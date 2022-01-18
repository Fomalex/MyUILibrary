import $ from './lib/lib';

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.closes .btn');
    console.log(btns);

    btns.forEach(item => {
        item.addEventListener('click', () => {
            console.log(1);
        })
    })
});


