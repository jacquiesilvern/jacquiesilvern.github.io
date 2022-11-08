const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.quotable.io/random' ;

async function getQuote() {
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log(json_response);
    console.log(json_response['message']);

    displayQuote(json_response['message']);
}

function displayQuote(x) {
    //const quoteBox = document.querySelector('#js-quote-text');

    document.getElementById('js-quote-text').textContent = x;

}

