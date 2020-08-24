'use strict'
const chuckSays = document.getElementById('chuckSays');
const getButton = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById('submitForm');

const defaultCategory = "dev"
// function getQuote(category) {}
const getQuote = (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(url).then(function(fetchResponse){
        chuckSays.innerHTML = fetchResponse.value;
    });
};

getButton.addEventListener('click',function(event){
    event.preventDefault();
    getQuote(defaultCategory);
});

submitFormButton.addEventListener('click', function(e){
    e.preventDefault();
    const userInput = document.getElementById('categoryInput');
    const category = userInput.value;
    getQuote(category);
});

(function(){
    getQuote(defaultCategory)
})(); //IIFE - Immediate Invoked Function Expression  function wrapped in Para, followed by Para
