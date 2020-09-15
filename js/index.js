'use strict'
const chuckSays = document.getElementById('chuckSays');
const getButton = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById('submitForm');
const modalOverlay = document.querySelector('.modal-overlay');
const closeButton = document.getElementById('closeModal');
let category = "dev"

// function getQuote(category) {}
const getQuote = () => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    getWithAwait(url).then(function(fetchResponse){
        chuckSays.innerHTML = fetchResponse.value;
    });
};

const getCategories = async () => {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const dropDownMenu = document.getElementById('categoryInput');
    let fetchCategories = await getWithAwait(url);
    // getWithAwait(url).then(function(fetchCategories){
        fetchCategories
            .filter((category) => category !== 'explicit' && category !== 'political' && category !== 'religion')
            .map(function(category){
            const catOption = document.createElement('option');
            catOption.value = category;
            catOption.text = category;
            dropDownMenu.appendChild(catOption);
        });
};

getButton.addEventListener('click',function(event){
    event.preventDefault();
    getQuote();
});

const getChuckQuotes = document.getElementById('getChuckQuote');
getChuckQuotes.addEventListener('submit', e => {
    e.preventDefault();
    const userInput = document.getElementById('categoryInput');
    category = userInput.value;
    getQuote();
    modalOverlay.classList.toggle('open')
});

closeButton.addEventListener('click', function(e){
    modalOverlay.classList.toggle('open');
});

window.onclick = function(event) {    
    if (event.target == modalOverlay) {        
        modalOverlay.classList.toggle('open');    
    };
};

(function(){
    getCategories();
    getQuote();
})(); //IIFE - Immediate Invoked Function Expression  function wrapped in Para, followed by Para

//Sean's code
// 'use strict';

// const chuckSays = document.getElementById("chuckSays");
// const refreshQuote = document.getElementById("refreshQuote");
// const submitFormButton = document.getElementById("submitForm");
// const modalOverlay = document.querySelector('.modal-overlay');
// const modalCloseButton = document.getElementById('closeModal');
// let category = "dev"

// const getQuote = () => {
//     const url = `https://api.chucknorris.io/jokes/random?category=${category}`;

//     get(url).then(function (fetchResponse) {
//         chuckSays.innerHTML = fetchResponse.value;
//         modalOverlay.classList.toggle('open');
//     });
// }

// const getCategories = () => {
//     const url = `https://api.chucknorris.io/jokes/categories`;
//     const dropdownMenu = document.getElementById("categoryInput");

//     get(url).then(function (categoryArray) {
//         categoryArray
//             .filter((category) => category !== "explicit")
//             .map(function (category) {
//                 const categoryOption = document.createElement('option');
//                 categoryOption.value = category;
//                 categoryOption.text = category;
//                 dropdownMenu.append(categoryOption);
//         });
//     });
// }

// refreshQuote.addEventListener('click', function (e) {
//     e.preventDefault();
//     getQuote();
// });

// const getChuckQuotes = document.getElementById("getChuckQuotes");

// getChuckQuotes.addEventListener('submit', e => {
//     e.preventDefault();
//     const userInput = document.getElementById("categoryInput");
//     category = userInput.value;
//     getQuote();
// });

// modalCloseButton.addEventListener('click', function (e) {
//     modalOverlay.classList.toggle("open");
// });

// (function () {
//     getCategories();
//     getQuote();
// })();