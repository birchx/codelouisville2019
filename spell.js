
document.querySelector('.classname')
document.querySelector('.new-quote')

const endpoint = 'https://lyricsovh.docs.apiary.io/#';
const newQuoteButton = document.querySelector('.new-quote');

newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
    fetch(endpoint)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    })
    .catch(function (){
        console.log('An error occurred');
    });
  }
