const colors = ['red', 'green', 'purple', 'blue', 'yellow', 'yellow', 'lime', 'gold'];
const hexColors = ['#A0A03C', '#A5279D', '#3364E3', '#2F02CC', '#EF3838', '#454EEE', '#0596C6', '#3E8C3E', '#978B8A', '#947782'];
let simple = document.querySelector('.simple');
let hex = document.querySelector('.hex');
let colorNumber = document.querySelector('.color-number');
let btn = document.querySelector('.btn');
let main = document.querySelector('.main');

btn.addEventListener('click', function() {
    let colors2 = "#" + Math.floor(Math.random() * 16777220).toString(16);
    colorNumber.innerText = colors2;
    main.style.backgroundColor = colors2;
})

simple.addEventListener('click', function() {
    colorNumber.innerHTML = 'red'
    main.style.backgroundColor = 'red';
    btn.addEventListener('click', function() {
        let colors1 = colors[Math.floor(Math.random() * colors.length)];
        colorNumber.innerText = colors1;
        main.style.backgroundColor = colors1;
    })
})
hex.addEventListener('click', function() {
    colorNumber.innerHTML = '#A0A03C'
    main.style.backgroundColor = '#A0A03C';
    btn.addEventListener('click', function() {
        let colors2 = "#" + Math.floor(Math.random() * 16777220).toString(16);
        colorNumber.innerText = colors2;
        main.style.backgroundColor = colors2;
    })
})
