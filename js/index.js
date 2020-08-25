'use strict'
const chuckSays = document.getElementById('chuckSays');
const getButton = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById('submitForm');


let category = "dev"
// function getQuote(category) {}
const getQuote = () => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(url).then(function(fetchResponse){
        chuckSays.innerHTML = fetchResponse.value;
    });
};

const getCategories = () => {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const dropDownMenu = document.getElementById('categoryInput');
    get(url).then(function(fetchCategories){
        fetchCategories
            .filter(category => category !== 'explicit' && category !== 'political' && category !== 'religion')
            .map(function(category){
            const catOption = document.createElement('option');
            catOption.value = category;
            catOption.text = category;
            dropDownMenu.appendChild(catOption);
        });
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
});

(function(){
    getCategories();
    getQuote()
})(); //IIFE - Immediate Invoked Function Expression  function wrapped in Para, followed by Para
